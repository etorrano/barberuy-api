/*
  Warnings:

  - A unique constraint covering the columns `[serviceId,staffId,salesPointId]` on the table `StaffService` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
--CREATE UNIQUE INDEX "StaffService_serviceId_staffId_salesPointId_key" ON "StaffService"("serviceId", "staffId", "salesPointId");
