// models/users.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明数据集 对象
var userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: Number
  }
});

module.exports = mongoose.model('users', userSchema)