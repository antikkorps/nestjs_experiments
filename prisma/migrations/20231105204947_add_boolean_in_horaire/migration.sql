-- AlterTable
ALTER TABLE "Horaire" ADD COLUMN     "ouvertureAm" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "ouverturePm" BOOLEAN NOT NULL DEFAULT true;
