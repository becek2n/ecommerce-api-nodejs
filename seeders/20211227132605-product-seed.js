'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //product
    let dataProduct = [];
    for(let i = 1; i<16; i++){
      dataProduct.push(
        {
          productBaseRelationId: 1,
          name: 'Evening Dress ' + i,
          description: '',
          price: '12',
          thumbnail: '/assets/uploads/item3.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      );
    }
    const products = await queryInterface.bulkInsert('Products', dataProduct, { returning: ['id'] });

    //product image
    let dataProductImage = [];
    for(let i = 1; i < products.length; i++){
      dataProductImage.push(
        {
          productId: products[i].id,
          photo: '/assets/uploads/item3.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: products[i].id,
          photo: '/assets/uploads/item1.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: products[i].id,
          photo: '/assets/uploads/item2.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      );
    }

    await queryInterface.bulkInsert('ProductImages', dataProductImage, {});
    
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
