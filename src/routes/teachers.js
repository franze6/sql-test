const TeacherController = require('../controllers/teacher');
const teacherValidation = require('../validations/teacher');
const crudRoute = require('./crud_route');

module.exports = crudRoute(TeacherController, teacherValidation, true);
