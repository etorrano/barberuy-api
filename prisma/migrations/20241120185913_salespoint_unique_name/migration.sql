/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `SalesPoint` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SalesPoint_name_key" ON "SalesPoint"("name");
