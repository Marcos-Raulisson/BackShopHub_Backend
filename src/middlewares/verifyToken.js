require('dotenv').config();

const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not provide' });
  }

  try {
    const decoded = jwt.decode(authorization, process.env.SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
}

module.exports = verifyToken;
