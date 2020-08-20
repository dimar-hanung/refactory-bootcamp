const { author, post, comment } = require("../db/models");
var cloudinary = require('cloudinary').v2;
var path = require("path");
require('dotenv').config();
var __dirname = path.resolve();
const response = {
  status: true,
  message: "",
  data: [],
};

class UserController {
  static async getAuthor(req, res) {
 
    const authorx = await author
      .findAll({
        include: [
          {
            model: post,
            include: [comment],
          },
        ],
      })
      .then(function (data) {
        return data;
      });
    response.data = authorx;
    response.message = "Succes get data";

    res.json(response);
  }
  static async getAuthorById(req, res) {
    console.log("Berhasil Mendapatkan data");
    author
      .findByPk(req.params.id)
      .then((response) => res.json(author.filter(response)))
      .catch((err) => res.json(err));
  }

  static async deleteAuthor(req, res) {
    author
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((data) => res.json({ status: data}))
      .catch((err) => res.json(err));
  }
  static async saveAuthor(req, res) {
    console.log(req.file)
    const { body } = req;
       const data = await author.build(body);
      data.save()
      .then(data => {
        response.message = "Data berhasil disimpan";
        response.data = { username: data.username, password: data.password };
        res.status(201).json(response);
      })
      .catch((err)=>{
      response.status = false;
      response.message = err.message;
      res.status(400).json(response);
      });
  }
  static async uploadImage(req, res) {
    
    // var filename = __dirname +'/'+ req.file;
    let filename = req.files.image.tempFilePath
    // console.log(filename)
    cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});
   const img = await cloudinary.uploader.upload(filename, function(error, result) {console.log(result, error)});

    const { body } = req;
    
       const data = await author.build(body);
      data.save()
      .then(data => {
        response.message = "Data berhasil disimpan";
        response.data = img;
        res.status(201).json(response);
      })
      .catch((err)=>{
      response.status = false;
      response.message = err.message;
      res.status(400).json(response);
      });
  }

  static async updateAuthor(req, res) {
    const { username, email, password } = req.body;
    console.log(username)
    author
      .update(
        {
          username,
          email,
          password,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then(data => {
      
        response.message = "Data berhasil disimpan";
        response.data = {};
        res.status(200).json(response);
      })
      .catch((err) => res.json(err));
  }
  static error(data){

  }
}

module.exports = UserController;