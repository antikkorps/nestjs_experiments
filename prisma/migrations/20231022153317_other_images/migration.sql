-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "url" TEXT,
    "featuredImage" BOOLEAN NOT NULL DEFAULT false,
    "AnnonceId" INTEGER,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
