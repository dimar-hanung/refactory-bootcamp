"use strict";
const { Model } = require("sequelize");
const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.post);
      this.hasMany(models.comment);
    }

    static filter(data){

      return {
        username:data.username,
        email: data.email
      }

    }
  

  }

 
  user.init(
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
      }
    },
    {
      sequelize,
      modelName: "author",
    }
  );
  return user;
};
