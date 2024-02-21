/* eslint-disable no-unused-vars */
const PasswordValidator = require('password-validator');
const validator = require('validator');
const bcrypt = require('bcrypt');

const RegisterAccount = require('../../models/users/CreateAccountModel');
const Nodemailer = require('../NodemailerService');

function CreateAccount(name, email, password, confirmPassword) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.confirmPassword = confirmPassword;

  this.init();
}

CreateAccount.prototype.init = function () {
  this.validateEmail();
  this.validadePassword();
  this.registerAccount();
};

CreateAccount.prototype.validateEmail = function () {
  if (!validator.isEmail(this.email)) {
    throw new Error('Invalid email');
  }
};

CreateAccount.prototype.validadePassword = function () {
  if (this.password === this.confirmPassword) {
    const schema = new PasswordValidator();

    schema
      .is().min(6)
      .is().max(100)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits();

    const validationResult = schema.validate(this.password);

    if (!validationResult) {
      throw new Error('Invalid password');
    }
  } else {
    throw new Error('Passwords must be the same.');
  }
};

CreateAccount.prototype.createPasswordHash = function (password) {
  const saltRounds = 14;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

CreateAccount.prototype.registerAccount = function () {
  const account = [
    this.name,
    this.email,
    this.createPasswordHash(this.password),
  ];

  const nodemailer = new Nodemailer(this.name, this.email, 'Boas vindas', `Saudações, ${this.name}, É um prazer recebê-lo(a) como nosso cliente. Esperamos que tenha uma experiência incrível com os nossos serviços e produtos.`);

  const registerAccount = new RegisterAccount(account);
};

module.exports = CreateAccount;
