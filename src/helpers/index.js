const axios = require('./axios');
const httpCodes = require('./http-codes');
const loadRoutes = require('./load_routes');
const object = require('./object');

module.exports = {
  axios,
  httpCodes,
  loadRoutes,
  ...object,
};
