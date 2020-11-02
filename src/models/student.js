const Sequelize = require('sequelize');
const db = require('../tools/db');

const student = db.define('student', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  student_card_number: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
}, {
  timestamps: true
});

module.exports = student;
