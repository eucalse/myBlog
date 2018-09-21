// models/postMessage.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明数据集 对象
var messageSchema = new Schema({
  username: {
    type: String
  },
  message: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('postMessage', messageSchema)