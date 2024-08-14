/*
  Warnings:

  - Added the required column `descritpion` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Category` ADD COLUMN `descritpion` VARCHAR(191) NOT NULL;
