require('dotenv').config();

const StartServer = require('../../index');

describe('Connection to the database', () => {
  let testInstance;

  beforeEach(() => {
    testInstance = new StartServer();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Connection to the database should not generate a new error', async () => {
    jest.spyOn(testInstance, 'openConnection').mockResolvedValue('Connection opened');
    jest.spyOn(testInstance, 'closeConnection').mockResolvedValue('Connection closed');

    await expect(testInstance.checkDatabaseConnection()).resolves.not.toThrow();

    expect(testInstance.openConnection).toHaveBeenCalled();
    expect(testInstance.closeConnection).toHaveBeenCalled();
  });

  it('Connection to the database should generate a new error', async () => {
    jest.spyOn(testInstance, 'openConnection').mockRejectedValue(new Error('Connection error'));
    jest.spyOn(testInstance, 'closeConnection').mockReturnValue('Connection closed');

    await expect(() => testInstance.checkDatabaseConnection()).rejects.toThrow('Connection error');

    expect(testInstance.openConnection).toHaveBeenCalled();
    expect(testInstance.closeConnection).not.toHaveBeenCalled();
  });
});

describe('Server startup', () => {
  let testInstance;

  beforeEach(() => {
    testInstance = new StartServer();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Must start the server and log expected messages', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});

    jest.spyOn(testInstance, 'startServerListening').mockImplementation(() => {
      console.log('Mocked server running');
      console.log(`Mocked Access: http://localhost:${process.env.SERVER_PORT}`)
    });

    testInstance.start();

    expect(testInstance.startServerListening).toHaveBeenCalledWith(process.env.SERVER_PORT);
  });

  it('The server should not start, it should generate a new error.', () => {
    jest.spyOn(testInstance, 'startServerListening').mockImplementation(() => {
      throw new Error('Error simulation.');
    });

    expect(() => testInstance.start()).toThrow('Error simulation.');
  });
});
