import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

// In order to create seeds, use "npm run seed"

const prisma = new PrismaClient();

const fakerUser = (): any => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

const fakerAnnonce = (): any => ({
  title: faker.company.buzzPhrase(),
  description: faker.lorem.paragraph(),
  brand: faker.company.name(),
  price: faker.number.int({ min: 4000, max: 22000 }),
  kilometrage: faker.number.int({ max: 100000 }),
  yearofcirculation: faker.number.int({ min: 2000, max: 2023 }),
  published: faker.datatype.boolean(),
  featured: faker.datatype.boolean(),
  imageCover: faker.image.url(),
  imageOne: faker.image.url(),
  imageTwo: faker.image.url(),
  imageThree: faker.image.url(),
});

const fakerContact = (): any => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  purpose: faker.lorem.sentence(),
  message: faker.lorem.paragraphs({ min: 1, max: 3 }),
});

async function main() {
  const fakerRounds = 10;
  dotenv.config();
  console.log('Seeding...');
  /// --------- Users && Annonces && Contacts --------------- ///
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.user.create({ data: fakerUser() });
    await prisma.annonce.create({ data: fakerAnnonce() });
    await prisma.contact.create({ data: fakerContact() });
  }
}

main()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
