const Joi = require('joi');

module.exports = {
  sorted: {
    query: {
      propToSort: Joi.string().allow('', null).empty(['', null]),
    },
  },
};
