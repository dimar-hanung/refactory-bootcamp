'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   Author.belongsTo(models.author)
    this.hasMany(models.comment);
    }
  };
  Author.init({
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
  }, {
    sequelize,
    modelName: 'post',
  });
  return Author;
};