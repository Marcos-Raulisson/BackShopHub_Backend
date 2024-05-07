const userResponseMessages = {
  get: {
    ok: () => {
      return {
        message: 'Successfully',
        statusCode: 200,
        description: 'Successfully get user data',
        request: {
          method: 'GET',
          description: 'Get user data',
          url: `/user`,
        },
      };
    }
  },
  post: {
    badRequest: () => {
      return {
        message: 'Bad Request',
        statusCode: 400,
        description: 'Email not found',
        request: {
          method: 'POST',
          description: 'Try to login with email',
          url: 'user/login',
        }
      };
    },
    failureToCreateUserPayload: () => {
      return {
        message: 'Failure',
        statusCode: 401,
        description: 'Failure to create user payload',
        request: {
          method: 'POST',
          description: 'Failure to create user payload',
          url: 'user/login',
        }
      };
    },
    ok: (object) => {
      return {
        message: 'Successfully',
        statusCode: 200,
        description: 'Successfully login',
        request: {
          method: 'POST',
          description: `Successfully login with email ${object.email}`,
          url: 'user/login',
        }
      };
    },
    wrongPassword: () => {
      return {
        message: 'Failure',
        statusCode: 401,
        description: 'Wrong password',
        request: {
          method: 'POST',
          description: 'Failure to login, wrong password',
          url: 'user/login',
        }
      };
    }
  }
};

module.exports = {
  userResponseMessages
};
