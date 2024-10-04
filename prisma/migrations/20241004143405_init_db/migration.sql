/*
  Warnings:

  - The primary key for the `Raffle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `drawDate` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `isDrawn` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `soldTickets` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `totalTickets` on the `Raffle` table. All the data in the column will be lost.
  - The primary key for the `Ticket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ticketNumber` on the `Ticket` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `maxSelections` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalNumbers` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('available', 'reserved', 'paid');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'paid');

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_raffleId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_userId_fkey";

-- AlterTable
ALTER TABLE "Raffle" DROP CONSTRAINT "Raffle_pkey",
DROP COLUMN "drawDate",
DROP COLUMN "isDrawn",
DROP COLUMN "price",
DROP COLUMN "soldTickets",
DROP COLUMN "totalTickets",
ADD COLUMN     "maxSelections" INTEGER NOT NULL,
ADD COLUMN     "totalNumbers" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Raffle_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Raffle_id_seq";

-- AlterTable
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_pkey",
DROP COLUMN "ticketNumber",
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "status" "TicketStatus" NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "raffleId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Ticket_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "raffleId" TEXT NOT NULL,
    "totalAmount" DECIMAL(65,30) NOT NULL,
    "paymentStatus" "PaymentStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_raffleId_fkey" FOREIGN KEY ("raffleId") REFERENCES "Raffle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_raffleId_fkey" FOREIGN KEY ("raffleId") REFERENCES "Raffle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
