const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('users works!');
});

module.exports = router;
