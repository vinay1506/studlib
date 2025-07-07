const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: { type: String, default: "STUDENT" }
});

module.exports = mongoose.model('User', userSchema);
