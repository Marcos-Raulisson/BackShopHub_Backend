const { describe, it, expect } = require('@jest/globals');
const StartServer = require('./index');

describe('Start server', () => {
  it('Test for environment variables', () => {
    const startServerInstance = new StartServer();

    expect(() => startServerInstance.checkEnvironmentVariables())
      .toThrowError('Make sure to check your environment variables (¬_¬ )');
  });
});
