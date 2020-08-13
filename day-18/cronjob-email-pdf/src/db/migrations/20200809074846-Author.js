'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('authors', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username:{
        type:Sequelize.STRING,
      },
      password:{
        type:Sequelize.STRING,
      },
      salt:{
        type:Sequelize.STRING,
      },
      email:{
        type:Sequelize.STRING,
      },
      profile:{
        type:Sequelize.STRING,
      },
      alamat:{
        type:Sequelize.STRING,
      },
      phone:{
        type:Sequelize.STRING,
      },
      name:{
        type:Sequelize.STRING,
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
    await queryInterface.dropTable('authors');
  }
};
