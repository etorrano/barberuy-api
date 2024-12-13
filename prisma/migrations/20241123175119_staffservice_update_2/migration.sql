/*
  Warnings:

  - A unique constraint covering the columns `[id,startDate,endDate]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
-- ALTER TABLE "StaffService" DROP CONSTRAINT "StaffService_scheduleId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_id_startDate_endDate_key" ON "Schedule"("id", "startDate", "endDate");

-- AddForeignKey
--ALTER TABLE "StaffService" ADD CONSTRAINT "StaffService_scheduleId_scheduleStartDate_scheduleEndDate_fkey" FOREIGN KEY ("scheduleId", "scheduleStartDate", "scheduleEndDate") REFERENCES "Schedule"("id", "startDate", "endDate") ON DELETE RESTRICT ON UPDATE CASCADE;
