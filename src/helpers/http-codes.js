const httpCodes = require('http-status-codes');

module.exports = (name, message) => (name
  ? {
    status: httpCodes[name],
    message: message || httpCodes.getStatusText(httpCodes[name]),
  }
  : {
    status: httpCodes.OK,
    message: httpCodes.getStatusText(httpCodes.OK),
  });
