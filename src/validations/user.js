const { body } = require('express-validator');
const User = require('../models/user');

exports.signUpRules = () => {
  return [
    body('login').trim().notEmpty()
      .custom(
        (value) => User.findUserByLogin(value)
          .then((user) => {
            if (user) {
              return Promise.reject(new Error('Login already exists'));
            }
            return true;
          })
      ),
    body('password').trim().notEmpty().escape()
  ];
};

exports.signInRules = () => {
  return [
    body('login').trim().notEmpty().escape(),
    body('password').trim().notEmpty().escape()
  ];
};
