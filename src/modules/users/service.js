const { getUsers: getUsersIntegration } = require('./integration');
const { findUsers: usersFromDb, saveUsers } = require('./repository');

/**
 * Get users from db or integration.
 */
const getUsers = async () => {
  try {
    const usersFromRedis = await usersFromDb();

    if (usersFromRedis) return usersFromRedis;

    const usersFromIntegration = await getUsersIntegration();

    saveUsers(usersFromIntegration);

    return usersFromIntegration;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
};
