const { author, post, comment } = require("../models");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/database.json")[env];
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const response = {
  status: true,
  message: "",
  data: [],
};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
  }
);

const dataPost = [
  {
    title: "Bom Bali",
    content: "Bombali meledak waktu itu",
    tags: "Berita",
    status: "expired",
    authorId: 1,
  },
  {
    title: "Pesawat Meledak",
    content: "Pesawat meledak kalau di matahari",
    tags: "Info",
    status: "Up to Date",
    authorId: 2,
  },
  {
    title: "Pesawat Meledak",
    content: "Pesawat meledak kalau di matahari",
    tags: "Info",
    status: "Up to Date",
    authorId: 2,
  },
];

const dataAuthor = [
  {
    username: "Leanne Graham",
    password: "123321",
    email: "leanne@gmail.com",
    profile: "image",
  },
  {
    username: "Dimar Hanung",
    password: "dimarrrr123",
    email: "dimar@gmail.com",
    profile: "image",
  },
  {
    username: "refactory",
    password: "12t42siu",
    email: "refactory@gmail.com",
    profile: "image",
  },
];


const dataComment = [
    {
        content:"komentarku terhadap itu tidak peduli",
        email:"dimarhanung@gmail.com",
        status:"true",
        authorId:2,
        post_id:2,
    },
    {
        content:"gpp lah ya,tidur dulu test 124 test 123",
        email:"dimarhanung@gmail.com",
        status:"true",
        authorId:2,
        postId:2,
    },
    {
        content:"apakah yang paling melelahkan",
        email:"dimarhanung@gmail.com",
        status:"true",
        authorId:1,
        postId:2,
    }
]

class sampleController {
  static async savePost(req, res) {
    sequelize.sync({ force: true }).then(() => {
      post
        .bulkCreate(dataPost, { validate: true })
        .then(() => {
          console.log("Post created");
        })
        .catch((err) => {
          console.log("failed to create post");
          console.log(err);
        })
        .finally(() => {
          // sequelize.close();
        });
    });
  }

  static async saveAuthor(req, res) {
    sequelize.sync({ force: true }).then(() => {
      author
        .bulkCreate(dataAuthor, { validate: true })
        .then(() => {
          console.log("dataAuthor created");
        })
        .catch((err) => {
          console.log("failed to create author");
          console.log(err);
        })
        .finally(() => {
          // sequelize.close();
        });
    });
  }
  static async saveComment(req, res) {
    sequelize.sync({ force: true }).then(() => {
      comment
        .bulkCreate(dataComment, { validate: true })
        .then(() => {
          console.log("dataComment created");
        })
        .catch((err) => {
          console.log("failed to create comment");
          console.log(err);
        })
        .finally(() => {
          // sequelize.close();
        });
    });
  }

}

sampleController.savePost();
sampleController.saveComment();
sampleController.saveAuthor();
