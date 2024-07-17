/*
  Warnings:

  - Added the required column `comment` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReviewType" AS ENUM ('Service', 'Staff', 'SalesPoint');

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "score" INTEGER NOT NULL,
ADD COLUMN     "type" "ReviewType" NOT NULL;
