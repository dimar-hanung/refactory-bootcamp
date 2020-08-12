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
   return queryInterface.bulkInsert('authors', [{
    id:1,
    username: 'dimarhanung',
    password: '123abcd',
    salt:'aasa3512532as',
    email: 'dimarhanung@gmail.com',
    profile:'https://i.ibb.co/3fvMkW5/image.png',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:2,
    username: 'yogavito',
    password: '2password',
    salt:'aasa3512532as',
    email: 'yogavito@gmail.com',
    profile:'https://i.ibb.co/3fvMkW5/image.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('authors', null, {});
  }
};
