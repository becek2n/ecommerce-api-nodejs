'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product_base_relations', 
    [
      {
        brand_id: 1,
        category_id: 1,
        collection_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        brand_id: 1,
        category_id: 1,
        collection_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        brand_id: 1,
        category_id: 1,
        collection_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product_base_relations', null, {});
  }
};
