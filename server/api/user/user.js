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

router.post('/add-to-cart', (req, res) => {
  const token = req.headers.authorization;
  const email = req.body.user.email;
  const productId = req.body.productId;

  prisma.product.findUnique({
    select: {
      product_id: true,
      name: true,
      price: true,
      image_url: true
    },
    where: {
      product_id: productId
    }
  })
    .then((product) => {
      if (!product) {
        res.status(404).send(); // product not found
        return;
      }
      // unfortunately, prisma does not support updating nested arrays, so we have to
      // fetch the product, fetch the user's cart, and then update the user's cart
      prisma.user.findUnique({
        select: {
          cart: true
        },
        where: {
          email: email,
          token: token
        }
      })
        .then((user) => {
          if (!user) {
            res.status(401).send(); // user not found
            return;
          }
          const cart = user.cart;
          // if product in cart, increment quantity
          let productInCart = false;
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].product_id === productId) {
              cart[i].quantity++;
              productInCart = true;
              break;
            }
          }
          // if product not in cart, add product to cart
          if (!productInCart) {
            cart.push({
              product_id: product.product_id,
              name: product.name,
              price: product.price,
              image_url: product.image_url,
              quantity: 1
            });
          }
          prisma.user.update({
            where: {
              email: email,
              token: token
            },
            data: {
              cart: cart
            }
          }).then((user) => {
            res.status(200).send(user);
          }).catch((err) => {
            console.error(err);
            res.status(500).send();
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send();
        });

    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

router.post('/update-cart', (req, res) => {
  const token = req.headers.authorization;
  const email = req.body.user.email;
  const cart = req.body.cart;

  prisma.user.update({
    where: {
      email: email,
      token: token,
    },
    data: {
      cart: cart
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