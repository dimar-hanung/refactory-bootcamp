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
    //   this.hasMany(models.comment);
    // Author.belongsTo(models.author)
    
    }
  };
  Author.init({
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
      }
  }, {
    sequelize,
    modelName: 'comment',
  });
  return Author;
};