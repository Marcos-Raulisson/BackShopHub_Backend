/* eslint-disable no-undef */
const {
  describe, beforeEach, it, expect,
} = require('@jest/globals');

const Nodemailer = require('../src/services/nodemailerService');

jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn((options, callback) => {
      callback(null);
    }),
  })),
}));

describe('Nodemailer', () => {
  beforeEach(() => {
    process.env.MAIL_FROM = 'from@example.com';
    process.env.MAIL_HOST = 'smtp.example.com';
    process.env.MAIL_PORT = 587;
    process.env.MAIL_USER = 'user';
    process.env.MAIL_PASS = 'password';
  });

  it('Test sending email successfully', async () => {
    const nodemailerInstance = new Nodemailer('Test User', 'to@test.com', 'Test Subject', 'Test Body');
    await nodemailerInstance.send();
  });

  it('Test sending an email with error', async () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

    jest.spyOn(Nodemailer.prototype, 'configureTransporter').mockImplementation(() => ({
      sendMail: jest.fn((options, callback) => {
        callback(new Error('error'));
      }),
    }));

    const nodemailerInstance = new Nodemailer('Test User', 'to@example.com', 'Test Subject', 'Test Body');

    try {
      await nodemailerInstance.send();
    } catch (error) {
      expect(error.message).toBe('error');
    } finally {
      consoleLogSpy.mockRestore();
    }
  });
});
