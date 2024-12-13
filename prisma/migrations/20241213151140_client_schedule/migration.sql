/*
  Warnings:

  - You are about to drop the column `salesPointId` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleEndDate` on the `StaffService` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleStartDate` on the `StaffService` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,userName]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,name]` on the table `SalesPoint` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,serviceId,serviceName,staffEmail,staffName,salesPointId,salesPointName]` on the table `StaffService` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[serviceId,staffId,salesPointId]` on the table `StaffService` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientName` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salesPointId` to the `StaffService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salesPointName` to the `StaffService` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_salesPointId_fkey";

-- DropIndex
DROP INDEX "StaffService_id_serviceId_serviceName_staffEmail_staffName_key";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "salesPointId",
ADD COLUMN     "clientName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StaffService" DROP COLUMN "scheduleEndDate",
DROP COLUMN "scheduleStartDate",
ADD COLUMN     "salesPointId" INTEGER NOT NULL,
ADD COLUMN     "salesPointName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Client_id_userName_key" ON "Client"("id", "userName");

-- CreateIndex
CREATE UNIQUE INDEX "SalesPoint_id_name_key" ON "SalesPoint"("id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "StaffService_id_serviceId_serviceName_staffEmail_staffName__key" ON "StaffService"("id", "serviceId", "serviceName", "staffEmail", "staffName", "salesPointId", "salesPointName");

-- CreateIndex
CREATE UNIQUE INDEX "StaffService_serviceId_staffId_salesPointId_key" ON "StaffService"("serviceId", "staffId", "salesPointId");

-- AddForeignKey
ALTER TABLE "StaffService" ADD CONSTRAINT "StaffService_salesPointId_salesPointName_fkey" FOREIGN KEY ("salesPointId", "salesPointName") REFERENCES "SalesPoint"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_clientId_clientName_fkey" FOREIGN KEY ("clientId", "clientName") REFERENCES "Client"("id", "userName") ON DELETE RESTRICT ON UPDATE CASCADE;
