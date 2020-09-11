const cron = require('node-cron');
const nodemailer = require('nodemailer');

// cron jobs
cron.schedule('*/10 * * * *', async function() {
  await sendEmail().then(console.log('success send email'));
});

// send email
async function sendEmail() {
  let transaction, income, configMail, transporter, emailTarget, mail;

  transaction = Math.floor(Math.random() * 10) + 1;

  income = `Rp ${transaction * 10000},00`;

  configMail = {
    service: 'gmail',
    auth: {
      user: 'group3emaildemo@gmail.com',
      pass: 'msvcp100M426'
    }
  };

  transporter = await nodemailer.createTransport(configMail);
  emailTarget = 'dimarhanung@gmail.com';

  mail = {
    to: emailTarget,
    from: configMail.auth.user,
    subject: 'Bisa Amin',
    html: `This is your Daily report. Total <b>success Transaction : ${transaction} </b>   and Total <b>Income : ${income} </b>`
  };
  transporter.sendMail(mail);
}

// task.start();

// const cron = require('node-cron');

// cron.schedule('* * * * * *', function() {
//   console.log('Running task every second');
// });