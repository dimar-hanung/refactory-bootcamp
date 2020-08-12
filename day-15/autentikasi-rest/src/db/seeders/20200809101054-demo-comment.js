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

   return queryInterface.bulkInsert('comments', [{
     id:1,
    content: 'Komentar untuk dimar hanung di post 1',
    status: 'posted',
    authorId:1,
    postId:1,
    email: 'dimarhanung@gmail.com',
    url:'https://google.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:2,
    content: 'Komentar untuk yoga vito post id 1',
    status: 'posted',
    authorId:2,
    postId:1,
    email: 'yogavito@gmail.com',
    url:'https://google.com',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:3,
    content: 'Komentar untuk yoga vito post id 1',
    status: 'posted',
    authorId:2,
    postId:2,
    email: 'yogavito@gmail.com',
    url:'https://google.com',
    createdAt: new Date(),
    updatedAt: new Date()
  }


]);



  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('comments', null, {});
  }
};
