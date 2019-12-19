const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: String,
    default: false,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports.userSchema = userSchema;

module.exports = model('users', userSchema);
