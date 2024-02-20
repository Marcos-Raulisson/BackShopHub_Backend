const PasswordValidator = require('password-validator');
const validator = require('validator');

const AuthModel = require('../../models/users/authModel');

function AuthService(email, password) {
  this.email = email;
  this.password = password;
}

AuthService.prototype.init = async function () {
  this.validateEmail();
  this.validatePassword();
  await this.login();
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

AuthService.prototype.login = async function () {
  const authModel = new AuthModel(this.email, this.password);
  const user = await authModel.findUser();

  if (!user) {
    throw new Error('User not found.');
  } else {
    console.log(user);
  }
};

module.exports = AuthService;
