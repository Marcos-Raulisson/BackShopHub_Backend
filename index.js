require('dotenv').config();
const app = require('./src/config/setupServer');
const Database = require('./src/config/Database');

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
    secret_key: process.env.SECRET_KEY,
    bucket_key: process.env.BUCKET_ID,
    bucket_name: process.env.BUCKET_NAME,
    app_key: process.env.APP_KEY,
    key_id: process.env.KEY_ID,
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
  this.startServerListening(process.env.SERVER_PORT);
};

StartServer.prototype.startServerListening = function (port) {
  app.listen(port, () => {
    console.log('Server running');
    console.log(`Access: http://localhost:${port}`);
    console.log('');
  });
};

module.exports = StartServer;

const startServerInstance = new StartServer();
