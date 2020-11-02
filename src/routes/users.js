const express = require('express');
const userController = require('../controllers/user');

const validator = require('../middleware/validator');
const validateRules = require('../validations/user');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/auth', validateRules.signInRules(), validator, userController.user_signin);
router.post('/', validateRules.signUpRules(), validator, userController.user_signup);

router.get('/', checkAuth, userController.user_get);
router.get('/list', checkAuth, userController.user_list);

router.put('/setRole', checkAuth, validateRules.setRoleRules(), validator, userController.user_setRole);

module.exports = router;
