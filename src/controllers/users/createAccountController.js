const CreateAccount = require('../../services/users/CreateAccountService');
const SearchUser = require('../../models/users/SearchUserModel');

exports.createAccount = async (req, res) => {
  const {
    name, email, password, confirmPassword,
  } = req.body;

  if (!name, !email, !password, !confirmPassword) throw new Error('All fields are mandatory.');

  try {
    const searchUser = new SearchUser(email);
    const user = await searchUser.find();

    if (user) return res.status(400).json({ message: 'User already exists.' });

    const createAccount = new CreateAccount(name, email, password, confirmPassword);

    res.status(200).json({
      message: 'Account created.',
      notice: 'Please ensure that the email address you provide is correct and accessible. This email is crucial for receiving important information related to your account.',
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
