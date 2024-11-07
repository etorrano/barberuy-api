/*
  Warnings:

  - You are about to drop the column `salesPointId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `serviceSalesPointId` on the `StaffService` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,name]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,serviceId,serviceName,staffEmail,staffName]` on the table `StaffService` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_salesPointId_fkey";

-- DropForeignKey
ALTER TABLE "StaffService" DROP CONSTRAINT "StaffService_serviceId_serviceName_serviceSalesPointId_fkey";

-- DropIndex
DROP INDEX "Service_id_name_salesPointId_key";

-- DropIndex
DROP INDEX "StaffService_id_serviceId_serviceName_serviceSalesPointId_s_key";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "salesPointId";

-- AlterTable
ALTER TABLE "StaffService" DROP COLUMN "serviceSalesPointId";

-- CreateTable
CREATE TABLE "_SalesPointToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SalesPointToService_AB_unique" ON "_SalesPointToService"("A", "B");

-- CreateIndex
CREATE INDEX "_SalesPointToService_B_index" ON "_SalesPointToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Service_id_name_key" ON "Service"("id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "StaffService_id_serviceId_serviceName_staffEmail_staffName_key" ON "StaffService"("id", "serviceId", "serviceName", "staffEmail", "staffName");

-- AddForeignKey
ALTER TABLE "StaffService" ADD CONSTRAINT "StaffService_serviceId_serviceName_fkey" FOREIGN KEY ("serviceId", "serviceName") REFERENCES "Service"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SalesPointToService" ADD CONSTRAINT "_SalesPointToService_A_fkey" FOREIGN KEY ("A") REFERENCES "SalesPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SalesPointToService" ADD CONSTRAINT "_SalesPointToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
