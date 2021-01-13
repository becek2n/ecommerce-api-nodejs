'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //product
    const product = await queryInterface.bulkInsert('products', 
    [
      {
        productbaserelation_id: 1,
        name: 'Evening Dress',
        description: '',
        price: '12',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], { returning: ['id'] });

    //product image
    await queryInterface.bulkInsert('product_images', 
    [
      {
        product_id: product[0].id,
        photo: '/assets/uploads/item3.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: product[0].id,
        photo: '/assets/uploads/item1.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: product[0].id,
        photo: '/assets/uploads/item2.png',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});

    //product 2
    const product2 = await queryInterface.bulkInsert('products', 
    [
      {
        productbaserelation_id: 1,
        name: 'Sport Dress',
        description: '',
        price: '19',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], { returning: ['id'] });

    //product image
    await queryInterface.bulkInsert('product_images', 
    [
      {
        product_id: product2[0].id,
        photo: '/assets/uploads/item4.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: product2[0].id,
        photo: '/assets/uploads/item3.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: product2[0].id,
        photo: '/assets/uploads/item5.png',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});

    //product 3
    const product3 = await queryInterface.bulkInsert('products', 
    [
      {
        productbaserelation_id: 1,
        name: 'Sport Dress',
        description: '',
        price: '19',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], { returning: ['id'] });

    //product image
    await queryInterface.bulkInsert('product_images', 
    [
      {
        product_id: product3[0].id,
        photo: '/assets/uploads/item4.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: product3[0].id,
        photo: '/assets/uploads/item3.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: product3[0].id,
        photo: '/assets/uploads/item5.png',
        created_at: new Date(),
        updated_at: new Date(),
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
    
    await queryInterface.bulkDelete('product_images', null, {});
    await queryInterface.bulkDelete('products', null, {});

  }
};
