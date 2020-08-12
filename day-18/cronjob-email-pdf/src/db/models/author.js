"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Author.hasMany(models.post, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Author.hasMany(models.comment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }

    static filter(data) {
      data.forEach(data => {
        data.password = undefined
        data.salt = undefined
        data.createdAt = undefined
        data.updatedAt = undefined
      });
      return data
    }
  }
  Author.init(
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncreament: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      salt: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      profile: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      modelName: "author",
    }
  );
  return Author;
};
