const express = require('express');
const systemController = require('../controllers/system');

const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/', checkAuth, (req, res) => {
  res.send('system works!');
});

router.get('/role', checkAuth, systemController.role_list);

module.exports = router;
