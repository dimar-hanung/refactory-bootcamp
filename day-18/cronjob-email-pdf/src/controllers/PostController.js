const { post } = require("../db/models");
// var bcrypt = require('bcrypt');
// var salt = bcrypt.genSaltSync(10);
// console.log(salt)
const response = {
  data: [],
  message: "Your Message",
  status: "success",
};

class PostController {
  static async getPosts(req, res) {

     const postx = await post.findAll();
    response.data = postx;
    response.message = "Succes get data";

    res.json(response);
  }
  static async getPostById(req, res) {
    console.log("Berhasil Delete");
    post.findByPk(req.params.id)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  }

  static async deletePost(req,res){
    
   post.destroy({
      where: {
        id: req.params.id
      }
  })
  .then(data => res.json({status:"success"}))
  .catch(err => res.json(err))
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

  static async updatePost(req,res){
    
    const {
      body: { title, content, tags },
    } = req;
    post.update({
      title,
      content,
      tags
      
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(data => res.json({status:"Success"}))
      .catch(err => res.json(err));
  }

}

module.exports = PostController;
