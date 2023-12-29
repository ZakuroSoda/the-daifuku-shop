var hash = require('hash.js')
const { v4: uuidv4 } = require('uuid');

function createToken() {
  return uuidv4();
}

function createSalt() {
  return uuidv4().slice(0, 8);
}

function createHash(password, salt) {
  const raw = hash.sha256().update(password + salt).digest('hex')
  const res = `$5$${salt}$${raw}`;
  return res;
}

function validateHash(password, hash) {
  const salt = hash.split('$')[2];
  const attempt = createHash(password, salt);
  return attempt === hash;
}

module.exports = {
  createToken,
  createSalt,
  createHash,
  validateHash,
}
