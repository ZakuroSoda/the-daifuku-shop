const express = require('express');
const { PrismaClient, Prisma } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/update', (req, res) => {
  const token = req.headers.authorization;
  const email = req.body.user.email;
  const value = req.body.value;
  const field = req.body.field;

  prisma.user.update({
      where: {
        email: email,
        token: token,
      },
      data: {
        [field]: value
      },
  }).then((user) => {
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(401).send(); // user not found
    }
  }).catch((err) => {
    console.error(err);
    res.status(500).send();
  });
});

module.exports = router;