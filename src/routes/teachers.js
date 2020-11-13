const TeacherController = require('../controllers/teacher');
const teacherValidation = require('../validations/teacher');
const curdRoute = require('./curd_route');

module.exports = curdRoute(TeacherController, teacherValidation, true);
