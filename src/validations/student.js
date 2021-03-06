const { body, param } = require('express-validator');
const User = require('../models/user');
const CrudValidation = require('./crud_validation');

class StudentRules extends CrudValidation {
  create() {
    return [
      body('student_card_number').trim().notEmpty().isInt(),
      body('userId').trim().notEmpty().isInt()
        .custom(async (value) => {
          const user = await User.findByPk(value);
          return !user && Promise.reject(new Error('Пользователь не найден!'));
        })
    ];
  }
}

module.exports = StudentRules;
