const Sequelize = require('sequelize');
const db = require('../tools/db');

const teacher = db.define('teacher', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  work_phone: {
    allowNull: false,
    type: Sequelize.STRING
  }
}, {
  timestamps: true
});

module.exports = teacher;
