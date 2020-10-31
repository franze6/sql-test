const express = require('express');
const userController = require('../controllers/user');

const validator = require('../middleware/validator');
const validateRules = require('../validations/user');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/', checkAuth, (req, res) => {
  res.send('users works!');
});

router.post('/auth', validateRules.signInRules(), validator, userController.user_signin);
router.post('/create', validateRules.signUpRules(), validator, userController.user_signup);

module.exports = router;
