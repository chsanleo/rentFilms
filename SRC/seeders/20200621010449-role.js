'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [{
      type: 'admin'
    },
    {
      type: 'user',
      parentID: 1
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
