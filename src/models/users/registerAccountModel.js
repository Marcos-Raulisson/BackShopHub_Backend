const Database = require('../../config/database');

function RegisterAccount({
  name, email, password, tokenUuid,
}) {
  Database.call(this);

  this.name = name;
  this.email = email;
  this.password = password;
  this.tokenUuid = tokenUuid;

  this.init();
}

RegisterAccount.prototype = Object.create(Database.prototype);

RegisterAccount.prototype.init = function () {
  this.register();
};

RegisterAccount.prototype.register = function () {
// Continue...
};

module.exports = RegisterAccount;
