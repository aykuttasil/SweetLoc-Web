/*
var models  = require('../models');
var express = require('express');
var router  = express.Router();


//  -> api.com/users/create
router.post('/create', function(req, res) {
models.User.create({
username: req.body.username,
ad: req.body.ad,
email: req.body.email
}).then(function() {
res.redirect('/');
});
});

//  -> api.com/users/12/destroy
router.get('/:user_id/destroy', function(req, res) {
models.User.destroy({
where: {
id: req.params.user_id
}
}).then(function() {
res.redirect('/');
});
});

//  -> api.com/users/12/task/create
router.post('/:user_id/tasks/create', function (req, res) {
models.Task.create({
title: req.body.title,
UserId: req.params.user_id
}).then(function() {
res.redirect('/');
});
});

//  -> api.com/users/12/task/34/destroy
router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
models.Task.destroy({
where: {
id: req.params.task_id
}
}).then(function() {
res.redirect('/');
});
});


module.exports = router;
*/
