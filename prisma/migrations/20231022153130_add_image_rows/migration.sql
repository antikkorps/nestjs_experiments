/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_AnnonceId_fkey";

-- AlterTable
ALTER TABLE "annonces" ADD COLUMN     "imageCover" TEXT,
ADD COLUMN     "imageOne" TEXT,
ADD COLUMN     "imageThree" TEXT,
ADD COLUMN     "imageThreeTitle" TEXT,
ADD COLUMN     "imageTwo" TEXT,
ADD COLUMN     "imageTwoTitle" TEXT,
ADD COLUMN     "imaheOneTitle" TEXT;

-- DropTable
DROP TABLE "Image";
