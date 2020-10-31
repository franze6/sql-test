const Sequelize = require('sequelize');
const db = require('../tools/db');

const permission = db.define('permission', {
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
});

module.exports = permission;
