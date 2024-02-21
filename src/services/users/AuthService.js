require('dotenv').config();

const PasswordValidator = require('password-validator');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const AuthModel = require('../../models/users/SearchUserModel');

function AuthService(email, password) {
  this.email = email;
  this.password = password;
}

AuthService.prototype.init = async function () {
  this.validateEmail();
  this.validatePassword();
  const token = await this.generateToken();
  return token;
};

AuthService.prototype.validateEmail = function () {
  if (!validator.isEmail(this.email)) {
    throw new Error('Invalid email');
  }
};

AuthService.prototype.validatePassword = function () {
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
};

AuthService.prototype.generateToken = async function () {
  const authModel = new AuthModel(this.email);
  const user = await authModel.findUser();

  if (!user) {
    throw new Error('User not found.');
  } else {
    // eslint-disable-next-line no-underscore-dangle
    const comparePassword = await bcrypt.compare(this.password, user.password_);

    if (!comparePassword) {
      throw new Error('Incorrect password.');
    } else {
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '5m' });
      return token;
    }
  }
};

module.exports = AuthService;
