const getValue = (obj, key) => {
  if (!key) return obj;
  const keys = key.split('.');
  return getValue(obj[keys.shift()], keys.join('.'));
};

const getDeepEntries = (obj, prefix = '') => Object.entries(obj).flatMap(([k, v]) => (Object(v) === v ? getDeepEntries(v, `${prefix}${k}.`) : [[`${prefix}${k}`, v]]));

module.exports = {
  getValue,
  getDeepEntries,
};
