require('dotenv').config();

const nodemailer = require('nodemailer');

function Nodemailer({ email }, subject, body) {
  this.to = email;
  this.subject = subject;
  this.body = body;

  this.init();
}

Nodemailer.prototype.init = function () {
  this.configureTransporter();
  this.send();
};

Nodemailer.prototype.configureTransporter = function () {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  return transporter;
};

Nodemailer.prototype.send = async function () {
  this.configureTransporter().sendMail({
    from: process.env.MAIL_FROM,
    to: this.to,
    subject: this.subject,
    text: this.body,
  });
};

module.exports = Nodemailer;
