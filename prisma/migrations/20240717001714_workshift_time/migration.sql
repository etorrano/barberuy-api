/*
  Warnings:

  - You are about to drop the column `endDate` on the `WorkShift` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `WorkShift` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `WorkShift` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `WorkShift` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkShift" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "endTime" TIME(4) NOT NULL,
ADD COLUMN     "startTime" TIME(4) NOT NULL;
