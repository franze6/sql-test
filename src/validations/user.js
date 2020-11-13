const bcrypt = require('bcrypt');
const { body, param } = require('express-validator');
const Role = require('../models/role');
const User = require('../models/user');
const CurdValidation = require('./curd_validation');

class UserValidation extends CurdValidation {
  static create() {
    return [
      body('data.login').trim().notEmpty()
        .custom(
          async (value) => {
            const user = await User.findUserByLogin(value);
            return user && Promise.reject(new Error('Login already exists'));
          }
        ),
      body('data.password').trim().notEmpty()
        .customSanitizer(
          (value) => {
            return bcrypt.hashSync(value, 10);
          }
        )
    ];
  }

  static signUp() {
    return this.create();
  }

  static signIn() {
    return [
      body('login').trim().notEmpty().escape(),
      body('password').trim().notEmpty().escape()
    ];
  }

  static setRole() {
    return [
      body('id').trim().notEmpty().isInt()
        .custom(async (value) => {
          const role = await Role.findByPk(value);
          return !role && Promise.reject(new Error('Роль не существует!'));
        })
    ];
  }
}

module.exports = UserValidation;
