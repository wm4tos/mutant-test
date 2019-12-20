const axios = require('./axios');

/**
 * Get users from external API.
 */
const getUsers = async () => {
  try {
    const { data } = await axios.get('/users');

    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
};
