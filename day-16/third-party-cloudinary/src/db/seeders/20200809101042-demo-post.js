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
   return queryInterface.bulkInsert('posts', [{
     id:1,
    content: 'Post untuk dimar hanung',
    status: 'posted',
    authorId:1,
    title: 'judul IT',
    tags:'IT',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:2,
    content: 'Post  untuk dimar lagi',
    status: 'posted',
    authorId:1,
    title: 'Judul javascript',
    tags:'IT',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:3,
    content: 'Post  untuk yoga vito',
    status: 'posted',
    authorId:2,
    title: 'Masakan paling enak',
    tags:'Masakan',
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
     * 
     */
    await queryInterface.bulkDelete('posts', null, {});
  }
};
