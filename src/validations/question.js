const { body } = require('express-validator');
const Question = require('../models/question');

exports.createRules = () => {
  return [
    // TODO: add check with questionTypes
    body('type').trim().notEmpty().escape(),
    body('data').trim().notEmpty().isJSON()
  ];
};
