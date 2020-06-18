'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    type: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {
    paranoid: true
  });
  Role.associate = function(models) {
    Role.hasMany(models.User);
  };
  return Role;
};