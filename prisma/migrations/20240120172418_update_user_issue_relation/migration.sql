/*
  Warnings:

  - You are about to drop the column `userId` on the `issue` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `issue` DROP FOREIGN KEY `Issue_userId_fkey`;

-- AlterTable
ALTER TABLE `issue` DROP COLUMN `userId`,
    ADD COLUMN `authorId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
