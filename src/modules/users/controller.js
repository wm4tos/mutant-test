const { getUsers: getUsersService } = require('./service');
const { httpCodes } = require('../../helpers');

const getAllUsers = async (req, res) => {
  try {
    const data = await getUsersService();

    const response = {
      ...httpCodes(),
      data,
    };

    res.status(response.status).json(response.data);
  } catch (error) {
    throw error;
  }
};

const getUsersSorted = async (req, res) => {
  const { propToSort: key = 'name' } = req.query;

  try {
    const users = await getUsersService();

    const usersSorted = users.sort((a, b) => (a[key] > b[key] ? 1 : -1));

    const response = {
      ...httpCodes(),
      data: usersSorted,
    };

    res.status(response.status).json(response.data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUsersSorted,
};
