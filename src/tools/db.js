const Sequelize = require('sequelize');

const sequelize = new Sequelize('sql-test', 'root', '123456', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
