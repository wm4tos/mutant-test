const { Router } = require('express');

const { getAllUsers, getUsersSorted } = require('./controller');
const contracts = require('./contracts');
const { validator } = require('../../middlewares');

module.exports = () => {
  const router = Router();

  /**
   * Get all users
   * @route GET /user
   * @group User - Operations about users.
   * @returns {User[]} 200 - An array with user data
   */
  router.get('/', getAllUsers);

  /**
   * Get all users sorted by key
   * @route GET /user/sorted
   * @group User - Operations about users.
   * @param {string} propToSort.query
   * @returns {User[]} 200 - An array with user data sorted
   */
  router.get('/sorted', validator(contracts.sorted, 'query'), getUsersSorted);

  return { router, endpoint: '/user' };
};
