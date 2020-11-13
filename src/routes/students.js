const StudentController = require('../controllers/student');
const studentValidation = require('../validations/student');
const curdRoute = require('./curd_route');

module.exports = curdRoute(StudentController, studentValidation, true);
