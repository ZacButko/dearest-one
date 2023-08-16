/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `FluidUnit` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FluidUnit_name_key" ON "FluidUnit"("name");
