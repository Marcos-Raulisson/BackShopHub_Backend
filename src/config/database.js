require('dotenv').config();

const mysql = require('mysql2/promise');

function Database() {
  this.database_host = process.env.DATABASE_HOST;
  this.database_user = process.env.DATABASE_USER;
  this.database_password = process.env.DATABASE_PASSWORD;
  this.database_name = process.env.DATABASE_NAME;

  this.connection = mysql.createPool({
    host: this.database_host,
    user: this.database_user,
    password: this.database_password,
    database: this.database_name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

Database.prototype.openConnection = async function () {
  try {
    this.connection = await this.connection.getConnection();
    console.log('Connection to the database performed (☞ﾟヮﾟ)☞');
  } catch (error) {
    console.error(error.message);
  }
};

Database.prototype.closeConnection = async function () {
  try {
    this.connection = await this.connection.releaseConnection();
    console.log('Connection to the database was closed (☞ﾟヮﾟ)☞');
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = Database;
