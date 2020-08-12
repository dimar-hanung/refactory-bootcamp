const { author, post, comment } = require("../models");

const response = {
  status: true,
  message: "",
  data: [],
};

class UserController {
  static async getAuthor(req, res) {
    const authorx = await author.findAll();
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
      .then((data) => res.json({ status: data===0?"Fail":"Success" }))
      .catch((err) => res.json(err));
  }
  static async saveAuthor(req, res) {
    const { body } = req;
    console.log(req.body)
    try {
      const save = await author.create(req.body);
      response.message = "sukses simpan data";
      response.data = save
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      res.status(400).json(response);
    }
  }

  static async updateAuthor(req, res) {
    const {
      body: { username, email, password },
    } = req;
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
      .then((data) => res.json({ status: data[0] }))
      .catch((err) => res.json(err));
  }
}

module.exports = UserController;
