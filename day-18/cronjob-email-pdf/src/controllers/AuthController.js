const { author } = require("../db/models");
const html = require("../email-template/template1")
const sendpdf = require("../email-template/example/welcome")
const fs = require('fs')
const puppeteer = require('puppeteer');
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


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('http://127.0.0.1:5500/day-18/html-to-pdf-example/example/resume3.html', {waitUntil: 'networkidle2'});
  await page.setContent(sendpdf())
  await page.pdf({path: './src/email-template/pdf/welcome.pdf', format: 'A4'});

  await browser.close();
})();

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
      subject: "Register Complete",
      html: html({
        username:data.username
      }),
      attachments: [{
        filename: 'welcome.pdf',
        path: './src/email-template/pdf/welcome.pdf',
        contentType: 'application/pdf'
      }],
    };
    transporter.sendMail(mail);
    return "Sukses kirim email"
  }
}
module.exports = AuthController;
