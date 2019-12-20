require('dotenv').config();

module.exports = Object.freeze({
  PORT: process.env.PORT || 8080,
  SECRET: process.env.SECRET,
  NODE_ENV: process.env.NODE_ENV,
  REDIS_EXPIRES: process.env.REDIS_EXPIRES,
  REDIS_URL: process.env.REDIS_URL,
});
