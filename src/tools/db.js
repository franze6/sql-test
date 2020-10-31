const Sequelize = require('sequelize');

const sequelize = new Sequelize('sql-test', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
