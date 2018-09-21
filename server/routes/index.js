var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Js = require('../models/javaScript')
var postMessage = require('../models/postMessage')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/login', function (req, res) {
//   res.render('login');
// });
// router.get('/register', function (req, res) {
//   res.render('register');
// })

router.post('/login', function (req, res) {
  var postData = {
    username: req.body.username,
    password: req.body.password
  };
  User.findOne({
    username: postData.username,
    password: postData.password
  }, function(err, data) {
    if(err) throw err;
    if(data) {
      res.json({"status" : data});
    } else {
      res.json({"status" : false});
    }
  })

});
// 注册处理
router.post('/register', function (req, res) {
  var postData = {
    username: req.body.username,
    password: req.body.password,
    status: req.body.status
  };
  // 查询是否被注册
  User.findOne({username: postData.username}, function (err, data) {
    if (data) {
      res.json({"idStatus": false});
    } else {
      // 保存到数据库
      User.create(postData, function( err, data) {
        if (err) throw err;
        res.json({"idStatus": true});
        // res.redirect('/userList'); // 重新定向到所用用户列表
      })
    }
  });
});

//获取所有用户列表
router.get('/userList', function (req, res) {
  var userList = User.find({}, function (err, data) {
    if (err) throw err;
    res.send(data)
  });
});

router.post('/jsPageUpload', function (req, res) {
  var postData = {
    title: req.body.title,
    content: req.body.content
  }
  Js.create(postData, function(err, data) {
    if (err) throw err;
    console.log('提交成功')
  })
  res.send('success')
})

router.post('/jsPage', function (req, res) {
  var postPage = req.body.page
  Js.find({page: postPage},function (err, data) {
    if (data) {
      res.send(data)
    }
  })
})
// 处理留言版留言请求
router.post('/postMessage',function (req, res) {
  var postData = {
    user: req.body.username,
    message: req.body.message
  }
  postMessage.create(postData, function(err, data) {
    if (err) throw err
    console.log('提交成功')
    res.json({'postStatus': true})
  })
})


module.exports = router;
