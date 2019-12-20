const { Router } = require('express');

const { getAllUsers } = require('./controller');

module.exports = () => {
  const router = Router();

  /**
   * Get all users
   * @route GET /user
   * @group User - Operations about users.
   * @returns {User[]} 200 - An array with user data
   */
  router.get('/', getAllUsers);

  return { router, endpoint: '/user' };
};
