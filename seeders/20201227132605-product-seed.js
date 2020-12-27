'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    //product
    const product = await queryInterface.bulkInsert('Products', 
    [
      {
        name: 'Evening Dress',
        brand: 'Dorothy Parkins',
        description: '',
        price: '12',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], { returning: ['id'] });

    //product image
    await queryInterface.bulkInsert('ProductImages', 
    [
      {
        product_id: product[0].id,
        photo: '/assets/uploads/1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: product[0].id,
        photo: '/assets/uploads/2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: product[0].id,
        photo: '/assets/uploads/3.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    
    await queryInterface.bulkDelete('ProductImages', null, {});
    await queryInterface.bulkDelete('Products', null, {});

  }
};
