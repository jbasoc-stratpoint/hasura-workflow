-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stores" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "address" VARCHAR(64) NOT NULL,
    "city" VARCHAR(64) NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "zip_code" DECIMAL(5,0) NOT NULL,
    "latitude" DECIMAL(9,6) NOT NULL,
    "longitude" DECIMAL(9,6) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Items_name_key" ON "Items"("name");
