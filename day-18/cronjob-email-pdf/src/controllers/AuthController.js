const { author } = require("../db/models");
// const html = require("../email-template/template1")
// const sendpdf = require("../email-template/html/welcome")
const fs = require("fs");
const puppeteer = require("puppeteer");

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
const nodemailer = require("nodemailer");
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

class AuthController {
  static async registerAuthor(req, res) {
    const { body } = req;
    const data = await author.build(body);
    data
      .save()
      .then((res) => res)
      .catch((err) => err);
    const email = await AuthController.sendEmail(data);
    response.status = data ? true : false;
    response.message = email;
    response.data = {
      username: data.username,
      email: data.email,
      profile: data.profile,
    };

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      // await page.goto('http://127.0.0.1:5500/day-18/html-to-pdf-example/example/resume3.html', {waitUntil: 'networkidle2'});

      await page.setContent(
        sendpdf({
          name: data.name,
          phone: data.phone,
          alamat: data.alamat,
        })
      );
      await page.pdf({
        path: "./src/email-template/pdf/welcome2.pdf",
        format: "A4",
      });

      await browser.close();
    })();

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
  static async sendEmail(data) {
    const task = cron.schedule("01 * * * *", function () {
      sendEmail().then(console.log("success send email"));
    });
    task.start();
    let transporter;
    const configMail = {
      service: "gmail",
      auth: {
        user: "group3emaildemo@gmail.com",
        pass: "msvcp100M426",
      },
    };
    console.log(data);
    transporter = await nodemailer.createTransport(configMail);
    const mail = {
      to: data.email,
      from: configMail.auth.user,
      subject: "Register Complete",
      html: html({
        username: data.username,
        name: data.name,
        phone: data.phone,
        alamat: data.alamat,
      }),
      attachments: [
        {
          filename: "welcome.pdf",
          path: "./src/email-template/pdf/welcome.pdf",
          contentType: "application/pdf",
        },
      ],
    };
    transporter.sendMail(mail);
    return "Sukses kirim email";
  }
}
module.exports = AuthController;
