const {
  describe,
  it,
  expect,
} = require('@jest/globals');
const StartServer = require('./index');

describe('Start server', () => {
  it('Test for environment variables', async () => {
    const startServerInstance = new StartServer();

    expect(() => startServerInstance.checkEnvironmentVariables())
      .not.toThrowError();
  });
});
