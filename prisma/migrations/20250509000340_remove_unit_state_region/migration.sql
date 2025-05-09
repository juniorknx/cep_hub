/*
  Warnings:

  - You are about to drop the column `estado` on the `Cep` table. All the data in the column will be lost.
  - You are about to drop the column `regiao` on the `Cep` table. All the data in the column will be lost.
  - You are about to drop the column `unidade` on the `Cep` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cep" DROP COLUMN "estado",
DROP COLUMN "regiao",
DROP COLUMN "unidade";
