const { client } = require('../../redis');
const { REDIS_EXPIRES } = require('../../config');

/**
 * Save users in redis.
 * @param {Object} data Users to save.
 * @param {Number} time Duration of register in redis db.
 */
const saveUsers = (data, time = REDIS_EXPIRES) => {
  client.set('users', JSON.stringify(data), 'EX', time);
};

module.exports = {
  saveUsers,
};
