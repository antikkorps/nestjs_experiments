/*
  Warnings:

  - You are about to drop the column `imaheOneTitle` on the `annonces` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "annonces" DROP COLUMN "imaheOneTitle",
ADD COLUMN     "imageOneTitle" TEXT;
