const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token) {
      token = token.split(' ');
    }

    req.userData = jwt.verify(token[1], config.JWT_KEY);
    next();
  }
  catch (error) {
    res.status(401).json({
      message: 'Auth failed'
    });
  }
};
