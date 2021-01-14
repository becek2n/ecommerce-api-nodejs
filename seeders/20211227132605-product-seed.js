'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //product
    const product = await queryInterface.bulkInsert('Products', 
    [
      {
        productBaseRelationId: 1,
        name: 'Evening Dress',
        description: '',
        price: '12',
        thumbnail: '/assets/uploads/item3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], { returning: ['id'] });

    //product image
    await queryInterface.bulkInsert('ProductImages', 
    [
      {
        productId: product[0].id,
        photo: '/assets/uploads/item3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: product[0].id,
        photo: '/assets/uploads/item1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: product[0].id,
        photo: '/assets/uploads/item2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    //product 2
    const product2 = await queryInterface.bulkInsert('Products', 
    [
      {
        productBaseRelationId: 1,
        name: 'Sport Dress',
        description: '',
        price: '19',
        thumbnail: '/assets/uploads/item4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], { returning: ['id'] });

    //product image
    await queryInterface.bulkInsert('ProductImages', 
    [
      {
        productId: product2[0].id,
        photo: '/assets/uploads/item4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: product2[0].id,
        photo: '/assets/uploads/item3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: product2[0].id,
        photo: '/assets/uploads/item5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    //product 3
    const product3 = await queryInterface.bulkInsert('Products', 
    [
      {
        productBaseRelationId: 1,
        name: 'Sport Dress',
        description: '',
        price: '19',
        thumbnail: '/assets/uploads/item5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], { returning: ['id'] });

    //product image
    await queryInterface.bulkInsert('ProductImages', 
    [
      {
        productId: product3[0].id,
        photo: '/assets/uploads/item4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: product3[0].id,
        photo: '/assets/uploads/item3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: product3[0].id,
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
