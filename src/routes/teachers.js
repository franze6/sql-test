const express = require('express');
const teacherController = require('../controllers/teacher');

const validator = require('../middleware/validator');
const validateRules = require('../validations/teacher');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/', checkAuth, validateRules.createRules(), validator, teacherController.create);
router.get('/', checkAuth, teacherController.get);

module.exports = router;
