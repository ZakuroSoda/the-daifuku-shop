const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors(), bodyParser.json());
const PORT = process.env.EXPRESS_PORT;

const auth = require('./api/auth/auth');
const newNewsletterUser = require('./api/new-newsletter-user');
const getProducts = require('./api/get-products');
const user = require('./api/user/user');

app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/new-newsletter-user', newNewsletterUser);
app.use('/api/get-products', getProducts);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
