'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10; 

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
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync('1q2w3e', salt);

    await queryInterface.bulkInsert('Users', 
    [
      {
        firstName: 'test',
        lastName: 'one',
        email: 'test1@mail.com',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'test',
        lastName: 'two',
        email: 'test2@mail.com',
        password: hash,
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
