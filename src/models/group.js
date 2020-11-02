const Sequelize = require('sequelize');
const db = require('../tools/db');
const Teacher = require('./teacher');
const Student = require('./student');

const group = db.define('group', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
}, {
  timestamps: true
});

group.belongsToMany(Student, { through: 'group_student' });
Student.belongsToMany(group, { through: 'group_student' });

group.belongsToMany(Teacher, { through: 'group_teacher' });
Teacher.belongsToMany(group, { through: 'group_teacher' });

module.exports = group;
