"use strict";
const { Model } = require("sequelize");
const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post.init(
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      tags: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      authorId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      }
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
