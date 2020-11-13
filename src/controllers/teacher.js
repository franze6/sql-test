const Teacher = require('../models/teacher');
const User = require('../models/user');
const CurdController = require('./curd_controller');

module.exports = new CurdController(Teacher);
