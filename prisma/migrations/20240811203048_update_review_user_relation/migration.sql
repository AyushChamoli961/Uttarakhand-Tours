/*
  Warnings:

  - The values [VISA] on the enum `InquiryType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `facilitiesRating` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `punctualityRating` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `serviceRating` on the `reviews` table. All the data in the column will be lost.
  - Added the required column `accomodations` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meal` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "InquiryType_new" AS ENUM ('VISACITY', 'FLIGHT', 'CRUISE', 'GENERAL');
ALTER TABLE "inquiries" ALTER COLUMN "inquiryType" DROP DEFAULT;
ALTER TABLE "inquiries" ALTER COLUMN "inquiryType" TYPE "InquiryType_new" USING ("inquiryType"::text::"InquiryType_new");
ALTER TYPE "InquiryType" RENAME TO "InquiryType_old";
ALTER TYPE "InquiryType_new" RENAME TO "InquiryType";
DROP TYPE "InquiryType_old";
ALTER TABLE "inquiries" ALTER COLUMN "inquiryType" SET DEFAULT 'GENERAL';
COMMIT;

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userId_fkey";

-- AlterTable
ALTER TABLE "packages" ADD COLUMN     "duration_in_days" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "duration_in_nights" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "facilitiesRating",
DROP COLUMN "punctualityRating",
DROP COLUMN "serviceRating",
ADD COLUMN     "accomodations" INTEGER NOT NULL,
ADD COLUMN     "meal" INTEGER NOT NULL,
ADD COLUMN     "service" INTEGER NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
