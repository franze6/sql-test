const Sequelize = require('sequelize');
const db = require('../tools/db');

const asset = db.define('asset', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  type: {
    allowNull: false,
    type: Sequelize.STRING
  },
  path: {
    allowNull: false,
    type: Sequelize.STRING
  }
}, {
  timestamps: true
});

module.exports = asset;
