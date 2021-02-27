const Student = require('../models/student');
const User = require('../models/user');
const CrudController = require('./crud_controller');

module.exports = new CrudController(Student);
