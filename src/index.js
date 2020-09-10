const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const questionsRouter = require('./routes/questions');
const db = require('./tools/db');
const config = require('./config');

const app = express();

db.sync()
  .then(() => {
    app.listen(config.PORT, () => {
      console.log(`Сервер запущен на порту ${config.PORT}...`);
    });
  })
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/users', usersRouter);
app.use('/questions', questionsRouter);

app.get('/', (req, res) => {
  res.status(200);
  res.send({
    message: 'It works!'
  });
});
