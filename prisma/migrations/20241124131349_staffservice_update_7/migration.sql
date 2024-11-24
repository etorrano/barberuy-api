/*
  Warnings:

  - You are about to drop the `_SalesPointToService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SalesPointToStaff` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_SalesPointToService" DROP CONSTRAINT "_SalesPointToService_A_fkey";

-- DropForeignKey
ALTER TABLE "_SalesPointToService" DROP CONSTRAINT "_SalesPointToService_B_fkey";

-- DropForeignKey
ALTER TABLE "_SalesPointToStaff" DROP CONSTRAINT "_SalesPointToStaff_A_fkey";

-- DropForeignKey
ALTER TABLE "_SalesPointToStaff" DROP CONSTRAINT "_SalesPointToStaff_B_fkey";

-- DropTable
DROP TABLE "_SalesPointToService";

-- DropTable
DROP TABLE "_SalesPointToStaff";
