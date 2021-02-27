const StudentController = require('../controllers/student');
const studentValidation = require('../validations/student');
const crudRoute = require('./crud_route');

module.exports = crudRoute(StudentController, studentValidation, true);
