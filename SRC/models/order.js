'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    MovieId: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    returnDate: DataTypes.DATE
  }, {
    paranoid: true
  });
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};