const axios = require('./axios');

/**
 * Get users from external API.
 */
const getUsers = async () => axios.get('/users');

module.exports = {
  getUsers,
};
