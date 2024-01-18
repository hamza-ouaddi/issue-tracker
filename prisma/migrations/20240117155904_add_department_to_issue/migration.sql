/*
  Warnings:

  - Added the required column `department` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `issue` ADD COLUMN `department` ENUM('DEVELOPMENT', 'DESIGN', 'MARKETING', 'SOCIAL_MEDIA', 'FINANCE', 'MANAGEMENT', 'LOGISTICS') NOT NULL;
