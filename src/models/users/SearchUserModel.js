const Database = require('../../config/Database');

function SearchUser(email) {
  Database.call(this);

  this.email = email;
}

SearchUser.prototype = Object.create(Database.prototype);

SearchUser.prototype.find = async function () {
  const connection = await this.openConnection();
  try {
    const sql = 'select * from user_profile where email = ?';
    const [rows] = await connection.execute(sql, [this.email]);
    if (!rows.length > 0) {
      return false;
    } else {
      return rows[0];
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    this.releaseConnection(connection);
  }
};

module.exports = SearchUser;
