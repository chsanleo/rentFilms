'use strict';
const properties = require('../config/properties');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email: 'admin@email.com',
      password: '$2a$09$JzNSLVU4tHKJy6nJVEkt7u3BQHx4L/Dao0H6w1TSGp14.vE3Y8QiC',
      address: 'Vila del pingüi 7',
      RoleId: 1
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
