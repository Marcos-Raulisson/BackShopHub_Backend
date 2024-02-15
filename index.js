require('dotenv').config();
const app = require('./src/config/setupServer');
const Database = require('./src/config/database');

function StartServer() {
  Database.call(this);

  this.enviromentVariables = {
    serverPort: process.env.SERVER_PORT,
    database_host: process.env.DATABASE_HOST,
    database_user: process.env.DATABASE_USER,
    database_password: process.env.DATABASE_PASSWORD,
    mail_host: process.env.MAIL_HOST,
    mail_port: process.env.MAIL_PORT,
    mail_user: process.env.MAIL_USER,
    mail_pass: process.env.MAIL_PASS,
    mail_from: process.env.MAIL_FROM,
  };

  if (require.main === module) {
    this.init();
  }
}

StartServer.prototype = Object.create(Database.prototype);

StartServer.prototype.init = async function () {
  try {
    this.checkEnvironmentVariables();
    await this.checkDatabaseConnection();
    this.start();
  } catch (error) {
    console.error(`Server inicialization failed at ${new Date().toLocaleString()}
${error.message}`);
    process.exit(1);
  }
};

StartServer.prototype.checkEnvironmentVariables = function () {
  const keys = Object.keys(this.enviromentVariables);

  for (let i = 0; i < keys.length; i += 1) {
    if (!this.enviromentVariables[keys[i]]) {
      throw new Error('ENVIROMENT VARIABLES ERROR: Make sure to check your environment variables (¬_¬ )');
    }
  }
};

StartServer.prototype.checkDatabaseConnection = async function () {
  try {
    await this.openConnection();
    await this.closeConnection();
  } catch (error) {
    throw Error(error.message);
  }
};

StartServer.prototype.start = function () {
  app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
    console.log(`Access: http://localhost:${process.env.SERVER_PORT}`);
    console.log('');
  });
};

module.exports = StartServer;

// eslint-disable-next-line no-unused-vars
const startServerInstance = new StartServer();
