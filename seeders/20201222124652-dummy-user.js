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

    await queryInterface.bulkInsert('Users', 
    [
      {
       userName: 'john',
       firstName: 'John',
       lastName: 'Doe',
       password: '1q2w3e',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        userName: 'alex',
        firstName: 'Alex',
        lastName: 'Van',
        password: '1q2w3e',
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
