/*
  Warnings:

  - Added the required column `name` to the `Nutricionista` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Nutricionista" ADD COLUMN     "name" TEXT NOT NULL;
