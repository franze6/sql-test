const { body } = require('express-validator');
const User = require('../models/user');
const Role = require('../models/role');

exports.signUpRules = () => {
  return [
    body('login').trim().notEmpty()
      .custom(
        async (value) => {
          const user = await User.findUserByLogin(value);
          return user && Promise.reject(new Error('Login already exists'));
        }
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

exports.setRoleRules = () => {
  return [
    body('id').trim().notEmpty().isInt()
      .custom(async (value) => {
        const role = await Role.findByPk(value);
        return !role && Promise.reject(new Error('Роль не существует!'));
      })
  ];
};
