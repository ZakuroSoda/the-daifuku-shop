const express = require('express');
const { PrismaClient, Prisma } = require('@prisma/client');
const {
  createToken,
  createSalt,
  createHash,
  validateHash,
} = require('./hasher');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', (req, res) => {
  const token = req.body.token;

  prisma.user.findFirst({
    where: {
      token: token,
    },
    select: {
      email: true,
    },
  }).then((user) => {
    if (user) {
      res.status(200).send(user.email);
    } else {
      res.status(401).send(); // user not found
    }
  }).catch((err) => {
    res.status(500).send();
  });
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      password: true,
    },
  }).then((user) => {
    if (user) {
      if (validateHash(password, user.password)) {
        const token = createToken();
        prisma.user.update({
          where: {
            email: email,
          },
          data: {
            token: token,
          },
        })
        .then((user) => {
          res.status(200).send(token);
        })
        .catch((err) => {
          res.status(500).send();
        });
      } else {
        res.status(401).send(); // wrong password
      }
    } else {
      res.status(401).send(); // user not found
    }
  })
  .catch((err) => {
    res.status(500).send();
  });
});

router.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const hash = createHash(password, createSalt());

  prisma.user.create({
    data: {
      email: email,
      password: hash,
    },
  }).then((user) => {
    const token = createToken();
    prisma.user.update({
      where: {
        email: email,
      },
      data: {
        token: token,
      },
    })
    .then((user) => {
      res.status(200).send(token);
    })
    .catch((err) => {
      res.status(500).send();
    });
  }).catch((err) => {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        res.status(409).send(); // email already exists
      }
    }
    res.status(500).send();
  });  
});

module.exports = router;