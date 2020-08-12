"use strict";
const { author, post, comment } = require("../models");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/database.json")[env];
const db = {};
let sequelize = new Sequelize("", config.username, config.password, {
  dialect: config.dialect,
});
// console.log(author.prototype)
sequelize
  .query("CREATE DATABASE `" + config.database + "`;")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err.message))
  .then((res) => {
    // console.log("masuk");
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      {
        dialect: config.dialect,
      }
    )

    // console.log("asik");
    const User = sequelize.define("author", author.prototype.rawAttributes);
    User.sync();

    const Post = sequelize.define("post", post.prototype.rawAttributes);
    Post.sync();

    const Comment = sequelize.define("comment", comment.prototype.rawAttributes);
    Comment.sync();

    console.log(res);

  });

module.exports = db;
