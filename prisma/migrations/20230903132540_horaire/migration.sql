-- CreateTable
CREATE TABLE "Horaire" (
    "id" SERIAL NOT NULL,
    "jourDeLaSemaine" TEXT NOT NULL,
    "openingAM" TIMESTAMP(3) NOT NULL,
    "closingAM" TIMESTAMP(3) NOT NULL,
    "openingPM" TIMESTAMP(3) NOT NULL,
    "closingPM" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Horaire_pkey" PRIMARY KEY ("id")
);
