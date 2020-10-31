const express = require('express');
const questionController = require('../controllers/question');

const validator = require('../middleware/validator');
const validateRules = require('../validations/question');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/', questionController.questions_list);

router.post('/create', checkAuth, validateRules.createRules(),
  validator, questionController.create_question);

module.exports = router;
