-- CreateEnum
CREATE TYPE "public"."RequestType" AS ENUM ('Sum', 'Multiply');

-- CreateTable
CREATE TABLE "public"."Requests" (
    "id" SERIAL NOT NULL,
    "type" "public"."RequestType" NOT NULL,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "answer" INTEGER NOT NULL,

    CONSTRAINT "Requests_pkey" PRIMARY KEY ("id")
);
