/*
var models  = require('../models');
var express = require('express');
var router  = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  console.log('routes/index.js: 13');
  var userList = models.User.findAll();
  console.log(userList);


  // models.User.findAll({
  //   include: [ models.Task ]
  // }).then(function(users) {
  //   res.render('index', {
  //     title: 'Express',
  //     users: users
  //   });
  // });
  res.render('pages/index');
});

module.exports = router;
*/
