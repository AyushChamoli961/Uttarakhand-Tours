/*
  Warnings:

  - The primary key for the `package_bookings` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "package_bookings" DROP CONSTRAINT "package_bookings_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "package_bookings_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "package_bookings_id_seq";
