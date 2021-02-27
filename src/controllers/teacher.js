const Teacher = require('../models/teacher');
const User = require('../models/user');
const CrudController = require('./crud_controller');

module.exports = new CrudController(Teacher);
