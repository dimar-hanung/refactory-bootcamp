const { user, post } = require("../models");

const response = {
  status: true,
  message: "",
  data: [],
};

class UserController {
  static async saveUser(req, res) {
    const { body } = req;

    try {
      const save = await user.create({
        username: body.nama,
        email: body.email,
      });
      response.message = "sukses simpan data";
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      res.status(400).json(response);
    }
  }

  static async photoUpload(req, res) {
    const { params, file, body } = req;
    // const photo = req.file.filename;
    const user = new UserModel({ title: body.nama, photo: file.filename });
    await user.save();
    // await UserModel.update({ photo }, { where: { id: req.body.userId } });
    // res.redirect("/users");
    res.json({ params, file, nama: body.nama });
  }

  static async updateUser(req, res) {
    const response = {
      status: true,
      message: "",
      data: [],
    };
    response.data = { id: 1, nama: "husen", email: "husen@mail.com" };
    response.status = true;
    res.status(200).json(response);
  }

  static async getUser(req, res) {
    const { id } = req.params;
    const userdetail = await user.findByPk(id, {
      include: post,
    });
    try {
      if (!userdetail) throw new Error("User not found");
      response.data = userdetail;
      response.status = "success";
      res.json(response);
    } catch (error) {
      response.message = error.message;
      response.data = [];
      response.status = "fail";
      res.status(404).json(response);
    }
  }
}

module.exports = UserController;
