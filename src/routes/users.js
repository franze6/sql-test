const express = require('express');
const userController = require('../controllers/user');

const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/', checkAuth, (req, res) => {
  res.send('users works!');
});

router.post('/auth', userController.user_login);
router.post('/create', userController.user_signup);

module.exports = router;
