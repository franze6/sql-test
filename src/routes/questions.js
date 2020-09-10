const express = require('express');
const questionController = require('../controllers/question');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('questions works!');
});

module.exports = router;
