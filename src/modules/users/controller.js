const { httpCodes, getValue, getDeepEntries } = require('../../helpers');

const { getUsers: getUsersService } = require('./service');

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

    const usersSorted = users.sort((a, b) => (getValue(a, key) > getValue(b, key) ? 1 : -1));

    const response = {
      ...httpCodes(),
      data: usersSorted,
    };

    res.status(response.status).json(response.data);
  } catch (error) {
    throw error;
  }
};

const getUsersFiltered = async (req, res) => {
  const { wordToSearch: word = 'suite', keyToSearch = 'address' } = req.query;
  const wordRegex = new RegExp(word, 'i');
  const keyRegex = new RegExp(keyToSearch, 'i');

  try {
    const users = await getUsersService();

    const usersFiltered = users.filter((user) => {
      const userDeepEntries = getDeepEntries(user);

      const valuesWithAddressInKey = userDeepEntries
        .filter(([key]) => keyRegex.test(key))
        .map(([, value]) => value);

      return valuesWithAddressInKey.some(x => wordRegex.test(x));
    });

    const response = {
      ...httpCodes(),
      data: usersFiltered,
    };

    res.status(response.status).json(response.data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUsersSorted,
  getUsersFiltered,
};
