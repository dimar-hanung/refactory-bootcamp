const puppeteer = require("puppeteer");
const fs = require("fs");
const axios = require("axios");
const nodemailer = require("nodemailer");
class GlobalController {
  static async makePdfPost(data) {
    const options = {
      uri: data.url,
      method: "POST",
      json: { username: "test" }, // All the information that needs to be sent
    };

    return axios
      .post(data.url, data.data)
      .then(async function (res) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(res.data);
        await page.pdf({
          path: data.path,
          format: "A4",
        });

        await browser.close();
        console.log("Buat File Pdf Sukses", data.path);
        return true;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static async sendEmail(data, subject) {
    const mailConfig = {
      service: "gmail",
      auth: {
        user: "group3emaildemo@gmail.com",
        pass: "msvcp100M426",
      },
    };

    return axios
      .post(data.url, data.data)
      .then(async function (res) {
        // const transporter = nodemailer.createTransport({
        //   service: mailConfig.service,
        //   auth: {
        //     user: mailConfig.auth.user,
        //     pass: mailConfig.auth.pass,
        //   },
        // });
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
          },
        });
        const mailOptions = {
          from: mailConfig.account,
          to: data.email,
          subject: subject,
          html: res.data,
          attachments: [
            {
              filename: "file.pdf",
              path: data.path,
              contentType: "application/pdf",
            },
          ],
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) console.log(error);
          // console.log("sukses");
          fs.unlinkSync(data.path);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        });
        return true;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

module.exports = GlobalController;
