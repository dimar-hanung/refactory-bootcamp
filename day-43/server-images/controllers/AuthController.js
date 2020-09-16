require('dotenv').config()
const models = require("../models")
const response = require('../helpers/response')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const jwtSecret = process.env.SECRET

class Controller {
  static async login(req, res) {
    const { data } = req.body;
    console.log({ data });
    try {
      const user = await models.User.findOne({
        where: {
          username: req.body.data.username,
        },
        raw: true,
      });

      if (!user) {
        return res
          .status(422)
          .json(response("Fail", "Username or password not found"));
      }

      if (user.role === "user") throw Error("Anda tidak bisa masuk");

      if (!bcrypt.compareSync(req.body.data.password, user.password)) {
        return res
          .status(422)
          .json(response("Fail", "Username or password not found"));
      }
      const token = jwt.sign(user.id, jwtSecret);

      delete user.password;
      delete user.salt;
      delete user.createdAt;
      delete user.updatedAt;
      res
        .status(200)
        .json(response("Success", "Login Success", { token, ...user }));
    } catch (error) {
      res.status(500).json(response("Fail", error.message));
    }
  }
}

module.exports = Controller;
