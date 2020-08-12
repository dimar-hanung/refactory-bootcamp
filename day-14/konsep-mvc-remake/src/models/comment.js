"use strict";
const { Model } = require("sequelize");
const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.post);
    }
  }
  comment.init(
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      authorId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      email: {
        type: Sequelize.STRING,
      },
      postId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      url: {
        type: Sequelize.STRING,
      }
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
