function Users(email, password) {
  this.email = email;
  this.password = password;

  this.init();
}

Users.prototype.init = function () {
  this.createAccount();
};

Users.prototype.createAccount = function () {
  console.log(`email: ${this.email}
password: ${this.password}`);
};

module.exports = Users;
