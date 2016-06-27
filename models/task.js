"use strict";

module.exports = function(sequelize, DataTypes) {

  var Task = sequelize.define("Task", {
    title: DataTypes.STRING
  },
  {
    freezeTableName: true // Model tableName will be the same as the model name
  },
  {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Task;
};
