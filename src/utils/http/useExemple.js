const {UtilsHttpResponseMessage} = require('./httpResponseMessagesUtils');
const {userResponseMessages} = require('./user/httpUserResponseMessages');

function ExempleForUseHttpResponseMessage() {
  return UtilsHttpResponseMessage.ok(userResponseMessages.get.ok());
}

function ExempleFunctionForHttpResponseMessageWithReturnForClient() {
  //filter é uma opção para passar um objeto para o retorno do módulo que chamou a resposta.
  return UtilsHttpResponseMessage.ok(userResponseMessages.post.ok(), {
    message: 'Hello World',
    object: {
      name: 'John Doe',
      age: 30
    },
    array: [1, 2, 3, 4, 5]
  });
}

module.exports = {ExempleForUseHttpResponseMessage, ExempleFunctionForHttpResponseMessageWithReturnForClient};
