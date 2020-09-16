'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "user_id", as: "supplier" })
      this.hasMany(models.Product_In, { foreignKey: "product_id" })
      this.hasMany(models.Product_Out, { foreignKey: "product_id" })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    photo_url: DataTypes.STRING,
    photo_id: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};