"use strict";

module.exports = function(sequelize, DataTypes) {
var Location = sequelize.define('Location', {
  name: { 
    type: DataTypes.STRING 
  },
  address: { 
    type: DataTypes.STRING 
  },
  loc_latitude: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: -90, max: 90 }
  },
  loc_longitude: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: -180, max: 180 }
  },
  loc_accuracy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  },
  loc_time: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.NOW
  }
},   {
    freezeTableName: true // Model tableName will be the same as the model name
  },{
  validate: {
    bothCoordsOrNone: function() {
      if ((this.loc_latitude === null) !== (this.loc_longitude === null)) {
        throw new Error('Require either both latitude and longitude or neither')
      }
    }
  }
});
return Location;
}




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
