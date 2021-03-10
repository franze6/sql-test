const SqlQuestion = require('./models/sql_question');

global.questionTypes = {
  ...global.questionTypes,
  sql: SqlQuestion
};
