const {
  describe,
  it,
  expect,
  afterAll,
} = require('@jest/globals');
const Database = require('./src/config/database');
const StartServer = require('./index');

describe('Start server', () => {
  const databaseInstance = new Database();
  const startServerInstance = new StartServer();

  it('Testing environment variables', async () => {
    expect(() => startServerInstance.checkEnvironmentVariables())
      .not.toThrowError();
  });

  it('Testing connection to the database', async () => {
    await expect(databaseInstance.openConnection()).resolves.not.toThrow();
  });

  afterAll(async () => {
    databaseInstance.closePool();
  });
});
