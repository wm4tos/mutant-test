const { Router } = require('express');

module.exports = () => {
  const router = Router();

  return { router, endpoint: '/user' };
};
