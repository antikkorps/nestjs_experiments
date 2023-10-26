/*
  Warnings:

  - You are about to drop the column `imageOneTitle` on the `annonces` table. All the data in the column will be lost.
  - You are about to drop the column `imageThreeTitle` on the `annonces` table. All the data in the column will be lost.
  - You are about to drop the column `imageTwoTitle` on the `annonces` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "annonces" DROP COLUMN "imageOneTitle",
DROP COLUMN "imageThreeTitle",
DROP COLUMN "imageTwoTitle";
