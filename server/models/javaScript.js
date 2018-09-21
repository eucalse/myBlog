// js路由调用数据库
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var jsSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  ceratAt: {
    type: Date,
    default: Date.now()
  },
  page: {
    type: Number
  }
})

module.exports = mongoose.model('js', jsSchema)