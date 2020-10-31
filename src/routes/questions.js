const express = require('express');
const questionController = require('../controllers/question');

const router = express.Router();

router.get('/', questionController.questions_list);

router.post('/create', questionController.create_question);

module.exports = router;
