/*
  Warnings:

  - You are about to drop the `CronRun` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_userAddress_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "theme" TEXT NOT NULL DEFAULT 'dark',
ALTER COLUMN "mainColor" SET DEFAULT 'black';

-- DropTable
DROP TABLE "CronRun";

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_userAddress_fkey" FOREIGN KEY ("userAddress") REFERENCES "User"("address") ON DELETE SET NULL ON UPDATE CASCADE;
