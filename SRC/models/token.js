'use strict';
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    token: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    revoke: DataTypes.BOOLEAN
  }, {
    paranoid: true
  });
  Token.associate = function(models) {
    // associations can be defined here
  };
  return Token;
};