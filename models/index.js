"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
//var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
//var sequelize = new Sequelize(config.database, config.username, config.password, config);
var DATABASE_URL='postgres://rcomzwpcbmesvq:GKtquv-6Mqtkb0IWtG_vn3fAiz@ec2-46-137-73-65.eu-west-1.compute.amazonaws.com:5432/d9gipmror5gubl'

var sequelize = sequelize = new Sequelize(process.env.DATABASE_URL || DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: env === "development" ? true : false
  }
});


var db = {};

fs
.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexOf(".") !== 0) && (file !== "index.js");
})
.forEach(function(file) {
  console.log(file);
  var model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
