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
  User.prototype.toJSON = function(){
    const user = this.get();
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.deletedAt;
    delete user.RoleId;
    return user;
  }

  User.associate = function(models) {
    User.hasMany(models.Order);
    User.belongsTo(models.Role);
    User.hasMany(models.Token);
  };
  return User;
};