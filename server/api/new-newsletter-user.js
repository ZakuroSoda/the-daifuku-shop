const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', (req, res) => {
  const newsletterUser = req.body.newsletterUser;
  prisma.newsletter_user.create({
    data: {
      email: newsletterUser
    }
  })
  .then(result => {
    res.status(200).send();
  })
  .catch(err => {
    res.status(500).send();
  })
});

module.exports = router;