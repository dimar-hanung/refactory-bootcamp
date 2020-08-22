const { author, post, comment } = require("../db/models");

const response = {
  status: true,
  message: "",
  data: [],
};

class UserController {
  static async getAuthor(req, res) {
    const data = await author
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
    response.data = data;
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
