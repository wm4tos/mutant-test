const auth = require('./auth');
const checkPermission = require('./checkPermission');
const errorHandler = require('./error_handler');
const validator = require('./validator');

module.exports = {
  auth,
  checkPermission,
  errorHandler,
  validator,
};
