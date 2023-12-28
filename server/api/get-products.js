const express = require('express');
const { PrismaClient, Prisma } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', (req, res) => {
  prisma.product.findMany({
    select: {
      product_id: true,
      name: true,
      price: true,
      stock: true,
      image_url: true,
    }
  })
  .then(result => {
    res.status(200).send(result);
  })
  .catch(err => {
    res.status(500).send();
  })
});

module.exports = router;