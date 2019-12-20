const httpStatus = require('http-status-codes');
const { httpCodes: httpStatusHelper } = require('../helpers');

module.exports = (err, _, res) => {
  if (err.name in httpStatus) {
    return res.status(httpStatus[err.name]).json(httpStatusHelper(err.name, err.message));
  }

  console.error(err);

  const internalError = httpStatusHelper('INTERNAL_SERVER_ERROR');

  return res.status(internalError.status).json(internalError);
};
