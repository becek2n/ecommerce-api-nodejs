'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('brands', 
    [
      {
        name: 'Dorothy Perkins',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Sitlly',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Levi's",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('brands', null, {});
  }
};
