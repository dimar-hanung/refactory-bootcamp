const { author } = require("../db/models");
// const html = require("../email-template/template1")
// const sendpdf = require("../email-template/html/welcome")
const fs = require("fs");
const run = require("./GlobalController");

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

const cron = require("node-cron");

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

class AuthController {
  static async registerAuthor(req, res) {
    const { body } = req;
    const id = `reg-${new Date().toISOString().split(":").join("-")}`;

    const data = await author.build(body);
    await data.save();
    const option = {
      url: `http://localhost:3000/email/1`,
      path: `./src/email-template/pdf/${id}.pdf`,
      email:data.email,
      data: data,
    };

    console.log("Register Sukses");
    await run.makePdfPost(option);
    await run.sendEmail(option,"Dimar");

    response.status = data ? true : false;
    response.message = "Success";
    response.data = data;
    console.log("Kirim Email Sukses");
    return res.json(response);
  }

  static async login(req, res) {
    const { body } = req;
    try {
      const user = await author.findOne({
        where: {
          username: body.username,
          password: body.password,
        },
      });

      const token = jsonwebtoken.sign(user.username, opts.secretOrKey);
      // console.log(token, "test");
      res.json({
        status: "Success",
        token,
      });
    } catch (error) {
      res.status(400).json("Error");
    }
  }
  static async register(req, res) {
    const { body } = req;

    try {
      const save = await author.create({
        username: body.username,
        password: body.password,
        salt: body.salt,
        email: body.email,
        photo: body.photo,
      });
      response.message = "sukses simpan data";
      response.data = save;
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      res.status(400).json(response);
    }
  }
}
module.exports = AuthController;
