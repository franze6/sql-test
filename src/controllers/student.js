const Student = require('../models/student');
const User = require('../models/user');
const CurdController = require('./curd_controller');

module.exports = new CurdController(Student);
