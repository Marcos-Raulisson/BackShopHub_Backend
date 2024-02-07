require('dotenv').config();
const app = require('./src/config/setupServer');

function StartServer() {
  this.enviromentVariables = {
    serverPort: process.env.SERVER_PORT,
    database_host: process.env.DATABASE_HOST,
    database_user: process.env.DATABASE_USER,
    database_password: process.env.DATABASE_PASSWORD,
    database_name: process.env.DATABASE_NAME,
  };

  if (require.main === module) {
    this.init();
  }
}

StartServer.prototype.init = function () {
  this.checkEnvironmentVariables();
  this.start();
};

StartServer.prototype.checkEnvironmentVariables = function () {
  const keys = Object.keys(this.enviromentVariables);

  for (let i = 0; i < keys.length; i += 1) {
    if (!this.enviromentVariables[keys[i]]) {
      throw new Error('Make sure to check your environment variables (¬_¬ )');
    }
  }
};

StartServer.prototype.start = function () {
  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
  });
};

module.exports = StartServer;

if (require.main === module) {
  // eslint-disable-next-line no-unused-vars
  const startServerInstance = new StartServer();
}
