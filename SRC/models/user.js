'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    RoleId: DataTypes.INTEGER
  }, {
    paranoid: true
  });
  User.associate = function(models) {
    User.hasMany(models.Order);
    User.belongsTo(models.Role);
  };
  return User;
};