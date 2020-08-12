'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('posts', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncreament:true,
        primaryKey:true
      },
      title:{
        type:Sequelize.STRING,
      },
      content:{
        type:Sequelize.STRING,
      },
      tags:{
        type:Sequelize.STRING,
      },
      status:{
        type:Sequelize.STRING,
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
    await queryInterface.dropTable('posts');
  }
};
