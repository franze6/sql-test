const Sequelize = require('sequelize');
const db = require('../tools/db');
const User = require('./user');
const Permission = require('./permission');

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
});

role.hasMany(User);
User.belongsTo(role);
role.hasMany(Permission);
Permission.belongsTo(role);

module.exports = role;
