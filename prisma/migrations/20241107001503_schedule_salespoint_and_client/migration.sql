/*
  Warnings:

  - You are about to drop the column `scheduleId` on the `StaffService` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salesPointId` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StaffService" DROP CONSTRAINT "StaffService_scheduleId_fkey";

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "clientId" INTEGER NOT NULL,
ADD COLUMN     "salesPointId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "StaffService" DROP COLUMN "scheduleId";

-- CreateTable
CREATE TABLE "_ScheduleToStaffService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ScheduleToStaffService_AB_unique" ON "_ScheduleToStaffService"("A", "B");

-- CreateIndex
CREATE INDEX "_ScheduleToStaffService_B_index" ON "_ScheduleToStaffService"("B");

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_salesPointId_fkey" FOREIGN KEY ("salesPointId") REFERENCES "SalesPoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ScheduleToStaffService" ADD CONSTRAINT "_ScheduleToStaffService_A_fkey" FOREIGN KEY ("A") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ScheduleToStaffService" ADD CONSTRAINT "_ScheduleToStaffService_B_fkey" FOREIGN KEY ("B") REFERENCES "StaffService"("id") ON DELETE CASCADE ON UPDATE CASCADE;
