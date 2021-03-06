var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/blog')

var app = express();
var db = mongoose.connection;
//数据库连接成功
db.on('open', function() {
  console.log('mongodb connection successed')
});
//连接失败
db.on('error', function () {
  console.log('mongoDB connenction error')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({
  origin:['http//127.0.0.1:8080'],
  methods:['GET', 'POST'],
  allowedHeaders:['Content-Type', 'Authorization']
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'source')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
