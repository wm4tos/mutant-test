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

module.exports = {
  getAllUsers,
};
