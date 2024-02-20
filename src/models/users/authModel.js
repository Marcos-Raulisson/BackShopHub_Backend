const Database = require('../../config/database');

function AuthModel(email, password) {
  Database.call(this);

  this.email = email;
  this.password = password;
}

AuthModel.prototype = Object.create(Database.prototype);

AuthModel.prototype.findUser = async function () {
  const connection = await this.openConnection();
  try {
    const sql = 'select * from user_profile where email = ?';
    const [rows] = await connection.execute(sql, [this.email]);
    if (rows.length > 0) {
      return rows[0];
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    this.releaseConnection(connection);
  }
};

module.exports = AuthModel;
