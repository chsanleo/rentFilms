'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    MovieId: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    returnDate: DataTypes.DATE
  }, {
    paranoid: true
  });
  Order.associate = function (models) {
    Order.belongsTo(models.User);
  };
  return Order;
};