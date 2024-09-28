/*
  Warnings:

  - You are about to drop the column `images` on the `packages` table. All the data in the column will be lost.
  - You are about to drop the `package_bookings` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[packageId]` on the table `package_availability` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "package_availability" DROP CONSTRAINT "package_availability_packageId_fkey";

-- DropForeignKey
ALTER TABLE "package_bookings" DROP CONSTRAINT "package_bookings_packageId_fkey";

-- DropForeignKey
ALTER TABLE "package_bookings" DROP CONSTRAINT "package_bookings_userId_fkey";

-- AlterTable
ALTER TABLE "packages" DROP COLUMN "images",
ADD COLUMN     "dates" TIMESTAMP(3)[] DEFAULT ARRAY[]::TIMESTAMP(3)[];

-- DropTable
DROP TABLE "package_bookings";

-- DropEnum
DROP TYPE "BookingStatus";

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "packageId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE INDEX "Image_packageId_idx" ON "Image"("packageId");

-- CreateIndex
CREATE UNIQUE INDEX "package_availability_packageId_key" ON "package_availability"("packageId");

-- AddForeignKey
ALTER TABLE "package_availability" ADD CONSTRAINT "package_availability_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "packages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "packages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
