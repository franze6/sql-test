const { body } = require('express-validator');
const Student = require('../models/student');
const User = require('../models/user');

exports.createRules = () => {
  return [
    body('student_card_number').trim().notEmpty().isInt(),
    body('userId').trim().notEmpty().isInt()
      .custom(async (value) => {
        const user = await User.findByPk(value);
        return !user && Promise.reject(new Error('Пользователь не найден!'));
      })
  ];
};
