/*
  Warnings:

  - You are about to drop the `Annonce` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Annonce" DROP CONSTRAINT "Annonce_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_AnnonceId_fkey";

-- DropForeignKey
ALTER TABLE "_AnnonceToEquipment" DROP CONSTRAINT "_AnnonceToEquipment_A_fkey";

-- DropTable
DROP TABLE "Annonce";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "annonces" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "kilometrage" INTEGER,
    "yearofcirculation" INTEGER,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" INTEGER,

    CONSTRAINT "annonces_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "annonces" ADD CONSTRAINT "annonces_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_AnnonceId_fkey" FOREIGN KEY ("AnnonceId") REFERENCES "annonces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnnonceToEquipment" ADD CONSTRAINT "_AnnonceToEquipment_A_fkey" FOREIGN KEY ("A") REFERENCES "annonces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
