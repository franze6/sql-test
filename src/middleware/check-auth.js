const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, config.JWT_KEY);
    req.userData = decoded;
    next();
  }
  catch (error) {
    res.status(401).json({
      message: 'Auth failed'
    });
  }
};
