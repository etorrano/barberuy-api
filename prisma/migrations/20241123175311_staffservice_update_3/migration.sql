/*
  Warnings:

  - You are about to drop the column `scheduleEndDate` on the `StaffService` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleId` on the `StaffService` table. All the data in the column will be lost.
  - You are about to drop the column `scheduleStartDate` on the `StaffService` table. All the data in the column will be lost.

*/
-- DropForeignKey
--ALTER TABLE "StaffService" DROP CONSTRAINT "StaffService_scheduleId_scheduleStartDate_scheduleEndDate_fkey";

-- AlterTable
/* ALTER TABLE "StaffService" DROP COLUMN "scheduleEndDate",
DROP COLUMN "scheduleId",
DROP COLUMN "scheduleStartDate"; */

-- CreateTable
/* CREATE TABLE "_ScheduleToStaffService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ScheduleToStaffService_AB_unique" ON "_ScheduleToStaffService"("A", "B");

-- CreateIndex
CREATE INDEX "_ScheduleToStaffService_B_index" ON "_ScheduleToStaffService"("B");

-- AddForeignKey
ALTER TABLE "_ScheduleToStaffService" ADD CONSTRAINT "_ScheduleToStaffService_A_fkey" FOREIGN KEY ("A") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ScheduleToStaffService" ADD CONSTRAINT "_ScheduleToStaffService_B_fkey" FOREIGN KEY ("B") REFERENCES "StaffService"("id") ON DELETE CASCADE ON UPDATE CASCADE;
 */