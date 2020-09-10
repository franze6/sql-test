const Sequelize = require('sequelize');
const db = require('../tools/db');

const question = db.define('question', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.DataTypes.INTEGER
  },
  title: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: false
  },
  right_answer: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = question;
