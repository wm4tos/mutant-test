const { client } = require('../../redis');
const { REDIS_EXPIRES } = require('../../config');

/**
 * Get users from redis.
 */
const findUsers = async () => {
  try {
    const data = await client.getAsync('users');

    if (data) return JSON.parse(data);

    return null;
  } catch (error) {
    throw error;
  }
};

/**
 * Save users in redis.
 * @param {Object} data Users to save.
 * @param {Number} time Duration of register in redis db.
 */
const saveUsers = (data, time = REDIS_EXPIRES) => {
  client.set('users', JSON.stringify(data), 'EX', time);
};

module.exports = {
  findUsers,
  saveUsers,
};
