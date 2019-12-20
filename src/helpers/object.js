const getValue = (obj, key) => {
  if (!key) return obj;
  const keys = key.split('.');
  return getValue(obj[keys.shift()], keys.join('.'));
};

module.exports = {
  getValue,
};
