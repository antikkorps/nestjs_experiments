/*
  Warnings:

  - You are about to drop the column `closingAM` on the `Horaire` table. All the data in the column will be lost.
  - You are about to drop the column `closingPM` on the `Horaire` table. All the data in the column will be lost.
  - You are about to drop the column `openingAM` on the `Horaire` table. All the data in the column will be lost.
  - You are about to drop the column `openingPM` on the `Horaire` table. All the data in the column will be lost.
  - Added the required column `closingAm` to the `Horaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closingPm` to the `Horaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingAm` to the `Horaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingPm` to the `Horaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Horaire" DROP COLUMN "closingAM",
DROP COLUMN "closingPM",
DROP COLUMN "openingAM",
DROP COLUMN "openingPM",
ADD COLUMN     "closingAm" TEXT NOT NULL,
ADD COLUMN     "closingPm" TEXT NOT NULL,
ADD COLUMN     "openingAm" TEXT NOT NULL,
ADD COLUMN     "openingPm" TEXT NOT NULL;
