/*
  Warnings:

  - You are about to alter the column `visitors` on the `SiteAnalytics` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "SiteAnalytics" ALTER COLUMN "visitors" SET DEFAULT 0,
ALTER COLUMN "visitors" SET DATA TYPE INTEGER;
