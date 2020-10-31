const Sequelize = require('sequelize');
const db = require('../tools/db');

const question = db.define('question', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  right_answer: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = question;
