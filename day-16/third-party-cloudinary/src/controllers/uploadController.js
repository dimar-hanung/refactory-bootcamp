const { author, post, comment } = require("../db/models");

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
    response.data = author.filter(authorx);
    response.message = "Succes get data";

    res.json(response);
  }

}

module.exports = UserController;
