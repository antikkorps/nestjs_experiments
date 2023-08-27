-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_AnnonceId_fkey";

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "message" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_AnnonceId_fkey" FOREIGN KEY ("AnnonceId") REFERENCES "annonces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
