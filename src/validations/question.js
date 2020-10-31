const { body } = require('express-validator');
const Question = require('../models/question');

exports.createRules = () => {
  return [
    body('title').trim().notEmpty().escape(),
    body('text').trim().notEmpty().escape(),
    body('right_answer').trim().notEmpty().escape()
  ];
};
