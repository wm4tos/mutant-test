const Joi = require('joi');

module.exports = {
  sorted: {
    query: {
      propToSort: Joi.string().allow('', null).empty(['', null]),
    },
  },
  filtered: {
    query: {
      addressToSearch: Joi.string().allow('', null).empty(['', null]),
    },
  },
};
