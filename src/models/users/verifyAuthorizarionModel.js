const { prototype } = require('backblaze-b2');
const Database = require('../../config/Database');

function Verify(id) {
  Database.call(this);

  this.id = id;
}

Verify.prototype = Object.create(Database.prototype);

Verify.prototype.isAdm = async function () {
  const connection = await this.openConnection();
  try {
    const sql = 'SELECT * FROM user_profile WHERE id = ?';
    const [rows] = await connection.execute(sql, [this.id]);
    if (!rows.length > 0) {
      return false;
    } else if (rows[0].access_level === 'adm') {
      return true;
    } else if (rows[0].access_level === 'client') {
      return false;
    }
  } catch (error) {
    console.error(error);
  } finally {
    this.releaseConnection(connection);
  }
};

module.exports = Verify;
