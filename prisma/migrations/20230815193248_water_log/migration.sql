/*
  Warnings:

  - You are about to drop the column `hairColor` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hairColor";

-- CreateTable
CREATE TABLE "WaterLog" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "amountEntered" DOUBLE PRECISION NOT NULL,
    "unitUsedId" INTEGER NOT NULL,
    "amountML" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "WaterLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FluidUnit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "convertToML" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FluidUnit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WaterLog" ADD CONSTRAINT "WaterLog_unitUsedId_fkey" FOREIGN KEY ("unitUsedId") REFERENCES "FluidUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterLog" ADD CONSTRAINT "WaterLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
