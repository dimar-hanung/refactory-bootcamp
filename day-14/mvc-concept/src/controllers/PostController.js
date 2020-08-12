const { post } = require("../models");
console.log(post)
const response = {
  data: [],
  message: "Your Message",
  status: "success",
};

class PostController {
  static async getPosts(req, res) {
    const post = await post.findAll();
    response.data = post;
    response.message = "Succes get data";

    res.json(response);
  }

  static async savePost(req, res) {
    const {
      body: { title, content, tags, status, userId },
    } = req;

    try {
      const insert = await post.create({
        title,
        content,
        tags,
        status,
        userId,
      });
      response.data = insert;
      response.message = "Succes save data";

      res.status(201).json(response);
    } catch (error) {
      response.data = [];
      response.message = "faile save data";
      res.status(400).json(response);
    }
  }
}

module.exports = PostController;
