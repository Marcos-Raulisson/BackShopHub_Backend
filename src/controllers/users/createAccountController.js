const CreateAccount = require('../../services/users/createAccountService');

exports.createAccount = (req, res) => {
  const {
    name, email, password, confirmPassword,
  } = req.body;

  if (!name, !email, !password, !confirmPassword) {
    res.status(400).json({ message: 'All fields are mandatory.' });
  } else {
    try {
      // eslint-disable-next-line no-unused-vars
      const createAccount = new CreateAccount(name, email, password, confirmPassword);
      res.status(200).json({ message: 'Account created.' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};
