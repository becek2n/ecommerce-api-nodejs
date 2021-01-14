'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductBaseRelations', 
    [
      {
        brandId: 1,
        categoryId: 1,
        collectionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 1,
        categoryId: 1,
        collectionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brandId: 1,
        categoryId: 1,
        collectionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductBaseRelations', null, {});
  }
};
