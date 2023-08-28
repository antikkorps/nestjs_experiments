/*
  Warnings:

  - The `AnnonceId` column on the `Image` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `annonces` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `annonces` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `A` on the `_AnnonceToEquipment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_AnnonceId_fkey";

-- DropForeignKey
ALTER TABLE "_AnnonceToEquipment" DROP CONSTRAINT "_AnnonceToEquipment_A_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "AnnonceId",
ADD COLUMN     "AnnonceId" INTEGER;

-- AlterTable
ALTER TABLE "_AnnonceToEquipment" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "annonces" DROP CONSTRAINT "annonces_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "annonces_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "_AnnonceToEquipment_AB_unique" ON "_AnnonceToEquipment"("A", "B");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_AnnonceId_fkey" FOREIGN KEY ("AnnonceId") REFERENCES "annonces"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnnonceToEquipment" ADD CONSTRAINT "_AnnonceToEquipment_A_fkey" FOREIGN KEY ("A") REFERENCES "annonces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
