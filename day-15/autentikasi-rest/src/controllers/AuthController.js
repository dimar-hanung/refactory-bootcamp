const { author } = require("../db/models");

const jsonwebtoken = require("jsonwebtoken");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const response = {
  status: true,
  message: "Success",
  data: [],
};

require("express-session")({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
});


let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

class AuthController {
  static async registerAuthor(req, res) {
    const { body } = req;
    const data = await author.build(body);
    await data.save();

    response.status = data ? true : false;
    response.message = "Success";
    response.data = data;
    return res.json(response);
  }

  static async login(req, res) {
    const {username,password} = req.body
    try {
      const user = await author.findOne({
        where: {
          username: username,
          password: password,
        },
      });

      const token = jsonwebtoken.sign(user.username, opts.secretOrKey);
      res.json({
        status: "Success",
        token,
      });
    } catch (error) {
      res.status(400).json("Error");
    }
  }
}
module.exports = AuthController;
