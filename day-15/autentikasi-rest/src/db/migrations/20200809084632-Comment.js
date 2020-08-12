'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('comments', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncreament:true,
        primaryKey:true
      },
      content:{
        type:Sequelize.STRING,
      },
      status:{
        type:Sequelize.STRING,
      },
      email:{
        type:Sequelize.STRING,
      },
      url:{
        type:Sequelize.STRING,
      },
      postId:{
        type:Sequelize.INTEGER,
        references: {
          model: 'posts', 
          key: 'id', 
       }
      },
      authorId:{
        type:Sequelize.INTEGER,
        references: {
          model: 'authors', 
          key: 'id', 
       }
      },
      createdAt:{
        type:Sequelize.DATE
      },
      updatedAt:{
        type:Sequelize.DATE
      }

      

    })


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('comments');
  }
};
