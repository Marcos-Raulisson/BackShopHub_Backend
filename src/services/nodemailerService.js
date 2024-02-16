require('dotenv').config();

const nodemailer = require('nodemailer');

function Nodemailer(name, email, subject, body) {
  this.name = name;
  this.to = email;
  this.subject = subject;
  this.body = body;

  this.mailOptions = {
    from: process.env.MAIL_FROM,
    to: this.to,
    subject: this.subject,
    text: this.body,
  };

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
  this.configureTransporter().sendMail(this.mailOptions, (error) => {
    if (error) {
      console.log('Certifique-se de que o endereço de e-mail fornecido está correto e acessível. Este e-mail é crucial para receber informações importantes, como recuperação de senha e atualizações de segurança. Se você não receber a mensagem de boas-vindas, verifique sua pasta de spam ou considere registrar-se novamente com um endereço de e-mail válido. Lembre-se de que o e-mail é uma parte essencial da segurança da sua conta.');
    }
  });
};

module.exports = Nodemailer;
