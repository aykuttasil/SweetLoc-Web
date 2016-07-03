var mongoose = require('sequelize');
var models = require("../models");

exports.save = function (req, res) {

  models.User.create(req.body).then(function () {
    res.json({
      "status": 200
    });
  })
};

exports.list = function (req, res) {

};

exports.get = function (req, res) {

};

exports.delete = function (req, res) {

};

exports.update = function (req, res) {

};
