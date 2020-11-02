const express = require('express');
const studentController = require('../controllers/student');

const validator = require('../middleware/validator');
const validateRules = require('../validations/student');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/', checkAuth, validateRules.createRules(), validator, studentController.create);
router.get('/', checkAuth, studentController.get);

module.exports = router;
