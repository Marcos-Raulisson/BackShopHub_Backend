const PasswordValidator = require('password-validator');
const validator = require('validator');

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
      .is().min(6, 'The password must contain at least 6 characters.')
      .is().max(100, 'The password must contain a maximum of 100 characters.')
      .has()
      .uppercase(1, 'The password must contain uppercase letters.')
      .has()
      .lowercase(1, 'The password must contain lowercase letters.')
      .has()
      .digits(2, 'Password must contain at least 2 numbers.');

    const validationResult = schema.validate(this.password, { details: true });

    for (let i = 0; i < validationResult.length; i += 1) {
      if (validationResult[i].message) {
        throw new Error(validationResult[i].message);
      }
    }
  } else {
    throw new Error('Passwords must be the same.');
  }
};

module.exports = CreateAccount;
