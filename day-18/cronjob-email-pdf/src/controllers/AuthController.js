const { author } = require("../db/models");
const html = require("../email-template/template1")
const response = {
  status: true,
  message: "Success",
  data: [],
};

const cron = require("node-cron");
const nodemailer = require("nodemailer");

class AuthController {
  static async registerAuthor(req, res) {
    const { body } = req;
    const data = await author.build(body);
    data
      .save()
      .then((res) => res)
      .catch((err) => err);
    const email = await AuthController.sendEmail(data)
    response.status = data ? true : false;
    response.message = email;
    response.data = {
      username: data.username,
      email: data.email,
      profile: data.profile,
    };

    return res.json(response);
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
    transporter = await nodemailer.createTransport(configMail);
    const mail = {
      to: data.email,
      from: configMail.auth.user,
      subject: "Bisa Amin",
      html: html({
        username:data.username
      }),
    };
    transporter.sendMail(mail);
    return "Sukses kirim email"
  }
}
module.exports = AuthController;
