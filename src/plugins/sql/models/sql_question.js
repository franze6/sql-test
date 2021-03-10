const Sequelize = require('sequelize');
const db = require('../../../tools/db');
const Question = require('../../../models/question');

const sqlQuestion = db.define('sql_question', {
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
  right_query: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Question.hasOne(sqlQuestion);
sqlQuestion.belongsTo(Question);

module.exports = sqlQuestion;
