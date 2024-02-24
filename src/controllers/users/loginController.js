const AuthService = require('../../services/users/AuthService');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'All fields are mandatory.' });

  try {
    const authService = new AuthService(email, password);
    const tokens = await authService.init();

    res.status(200).json({
      data: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
    });
  } catch (error) {
    return res.status(401).json({
      data: {
        message: error.message,
      },
    });
  }
};
