const Users = require('../../services/users/createAccountService');

exports.createAccount = (req, res) => {
  const { email, password } = req.body;
  // eslint-disable-next-line no-unused-vars
  const users = new Users(email, password);
  res.status(200).json({ message: 'Dados recebidos.' });
};
