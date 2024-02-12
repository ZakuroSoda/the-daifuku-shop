-- AlterTable
ALTER TABLE `product` ADD COLUMN `out_of_stock` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `visible` BOOLEAN NOT NULL DEFAULT true;
