-- CreateTable
CREATE TABLE "Cep" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT NOT NULL,
    "localidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "ibge" TEXT,
    "gia" TEXT,
    "ddd" TEXT,
    "siafi" TEXT,

    CONSTRAINT "Cep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cep_cep_key" ON "Cep"("cep");
