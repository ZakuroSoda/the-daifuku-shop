const express = require('express');
const { PrismaClient, Prisma } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', (req, res) => {
  const newsletterUser = req.body.newsletterUser;
  prisma.newsletterUser.create({
    data: {
      email: newsletterUser
    }
  })
  .then(result => {
    res.status(200).send();
  })
  .catch(err => {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        res.status(409).send();
        return;
      }
    }
    res.status(500).send();
  })
});

module.exports = router;