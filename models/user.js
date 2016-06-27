"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    ad : DataTypes.STRING,
    email : DataTypes.STRING
  },
  {
    freezeTableName: true // Model tableName will be the same as the model name
  },
  {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  });

  return User;
};




// var Sequelize = require('sequelize');
// var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres:abalugu');
//
// var User = sequelize.define('User', {
//   firstName: {
//     type: Sequelize.STRING,
//     field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// }, {
//   freezeTableName: true // Model tableName will be the same as the model name
// });

// // force : true -> Eğer daha önce table oluşturulmuşsa kaldır ve tekrar oluştur.
// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });
