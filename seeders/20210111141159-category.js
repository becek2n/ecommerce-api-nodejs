'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', 
    [
      {
        name: 'Fashion',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Woman',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Man',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
