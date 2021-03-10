const Sequelize = require('sequelize');
const db = require('../tools/db');

const question = db.define('question', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = question;
