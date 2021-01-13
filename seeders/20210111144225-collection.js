'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('collections', 
    [
      {
        name: 'T-shirts',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jeans',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Crop Tops',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('collections', null, {});
  }
};
