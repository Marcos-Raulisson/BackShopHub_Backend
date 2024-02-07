require('dotenv').config();

function StartServer() {
  this.enviromentVariables = {
    serverPort: process.env.SERVER_PORT,
    database_host: process.env.DATABASE_HOST,
    database_user: process.env.DATABASE_USER,
    database_password: process.env.DATABASE_PASSWORD,
    database_name: process.env.DATABASE_NAME,
  };
}

StartServer.prototype.init = function () {
  this.checkEnvironmentVariables();
};

StartServer.prototype.checkEnvironmentVariables = function () {
  const keys = Object.keys(this.enviromentVariables);

  for (let i = 0; i < keys.length; i += 1) {
    if (!this.enviromentVariables[keys[i]]) {
      throw new Error('Make sure to check your environment variables (¬_¬ )');
    }
  }
};

module.exports = StartServer;
