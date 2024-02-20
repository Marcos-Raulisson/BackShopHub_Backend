const AuthService = require('../../services/users/authService');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'All fields are mandatory.' });
  } else {
    try {
      const authService = new AuthService(email, password);
      await authService.init();
      res.status(200).json({ message: 'Logged' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};
