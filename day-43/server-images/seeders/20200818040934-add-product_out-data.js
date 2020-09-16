'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Product_Outs", [{
      product_id: 1,
      date: new Date(),
      total: 110,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_id: 2,
      date: new Date(),
      total: 110,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_id: 3,
      date: new Date(),
      total: 110,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Product_Outs", null, {})
  }
};
