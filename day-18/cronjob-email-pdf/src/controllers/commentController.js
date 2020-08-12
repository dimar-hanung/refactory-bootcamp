const { comment } = require("../db/models");

const response = {
  status: true,
  message: "",
  data: [],
};

class CommentController {
  static async getComments(req, res) {
    const commentx = await comment.findAll();
    response.data = commentx;
    response.message = "Succes get data";

    res.json(response);
  }
  static async getCommentById(req, res) {
    console.log("Berhasil Delete");
    comment
      .findByPk(req.params.id)
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  }

  static async deleteComment(req, res) {
    comment
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((data) => res.json({ status: "success" }))
      .catch((err) => res.json(err));
  }
  static async saveComment(req, res) {
    const { body } = req;

    try {
      const save = await comment.create({
        content: body.content,
        email: body.email,
        url:body.url
      });
      response.message = "sukses simpan data";
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      res.status(400).json(response);
    }
  }

  static async updateComment(req, res) {
    const {
      body: { content, email, status, url },
    } = req;
    comment
      .update(
        {
          content,
          email,
          status,
          url,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then((data) => res.json({ status: "Success" }))
      .catch((err) => res.json(err));
  }
}

module.exports = CommentController;
