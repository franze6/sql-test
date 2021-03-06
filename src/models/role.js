const Sequelize = require('sequelize');
const db = require('../tools/db');
const User = require('./user');

const role = db.define('role', {
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
}, {
  timestamps: true
});

role.hasMany(User);
User.belongsTo(role);

module.exports = role;
