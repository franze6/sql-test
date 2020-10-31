const Sequelize = require('sequelize');
const db = require('../tools/db');

const user = db.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    isEmail: true,
    default: null
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

user.findUserByLogin = (login, include) => {
  return user.findOne({
    where: {
      login
    },
    include
  });
};

module.exports = user;
