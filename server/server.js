const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors(), bodyParser.json());
const PORT = process.env.EXPRESS_PORT;

const newNewsletterUser = require('./api/new-newsletter-user');

app.use('/api/new-newsletter-user', newNewsletterUser);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
