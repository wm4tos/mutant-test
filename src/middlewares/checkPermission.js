module.exports = (req, _, next) => {
  const isAdmin = req.user.isAdmin && !/false/.test(req.user.isAdmin);

  if (isAdmin) return next();

  const error = {
    name: 'FORBIDDEN',
    message: 'You don\'t have permission to make that.',
  };

  return next(error);
};
