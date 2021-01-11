'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
        photo: '/assets/uploads/item3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: product[0].id,
        photo: '/assets/uploads/item1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: product[0].id,
        photo: '/assets/uploads/item2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    //product 2
    const product2 = await queryInterface.bulkInsert('Products', 
    [
      {
        name: 'Sport Dress',
        brand: 'Sitlly',
        description: '',
        price: '19',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], { returning: ['id'] });

    //product image
    await queryInterface.bulkInsert('ProductImages', 
    [
      {
        product_id: product2[0].id,
        photo: '/assets/uploads/item4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: product2[0].id,
        photo: '/assets/uploads/item3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: product2[0].id,
        photo: '/assets/uploads/item5.png',
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
