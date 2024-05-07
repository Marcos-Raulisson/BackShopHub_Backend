const {GetWebApiUrl} = require('../GetWebApiUrlUtils.js');
const UtilsHttpResponseMessage = {
  notFound: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 404,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.endpoint}`,
      },
      ...filter
    };
  },
  missingEntity: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 404,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.endpoint}`,
      },
      ...filter
    };
  },
  serverError: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 404,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.endpoint}`,
      },
      ...filter
    };
  },
  created: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 404,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.endpoint}`,
      },
      ...filter
    };
  },
  badRequest: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: response.statusCode,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.url}`,
      },
      ...filter
    };
  },
  ok: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 200,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.url}`,
      },
      ...filter
    };
  },
  unauthorized: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 404,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.endpoint}`,
      },
      ...filter
    };
  },
  forbidden: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 404,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.endpoint}`,
      },
      ...filter
    };
  },
  noContent: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 404,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.endpoint}`,
      },
      ...filter
    };
  },
  accepted: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 404,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.endpoint}`,
      },
      ...filter
    };
  },
  conflict: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 409,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.endpoint}`,
      },
      ...filter
    };
  },

  customMessage: (response, filter = {}) => {
    return {
      message: response.message,
      description: response.description,
      statusCode: 404,
      request: {
        method: response.request.method,
        description: response.request.description,
        url: `${GetWebApiUrl()}${response.request.endpoint}`,
      },
      ...filter
    };
  }
};

module.exports = {
  UtilsHttpResponseMessage
};
