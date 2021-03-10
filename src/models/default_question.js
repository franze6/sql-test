const Sequelize = require('sequelize');
const Asset = require('./asset');
const db = require('../tools/db');
const Question = require('./question');

const defaultQuestion = db.define('defaultQuestion', {
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
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true
});

const defaultAnswer = db.define('defaultAnswer', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});
Question.hasOne(defaultQuestion);
defaultQuestion.belongsTo(Question);

defaultQuestion.hasMany(Asset);
Asset.belongsTo(defaultQuestion);

defaultQuestion.hasMany(defaultAnswer);
defaultQuestion.hasOne(defaultAnswer, {
  sourceKey: 'right_answer'
});
defaultAnswer.belongsTo(defaultQuestion);

module.exports = defaultQuestion;
