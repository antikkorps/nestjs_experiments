import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}
  async create(createContactDto: CreateContactDto) {
    return this.prisma.contact.create({
      data: createContactDto,
    });
  }

  async findAll() {
    return this.prisma.contact.findMany();
  }

  async findOne(id: number) {
    return this.prisma.contact.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.contact.delete({
      where: { id },
    });
  }
}
