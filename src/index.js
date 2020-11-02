const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const usersRouter = require('./routes/users');
const systemRouter = require('./routes/system');
const questionsRouter = require('./routes/questions');
const studentsRouter = require('./routes/students');
const teachersRouter = require('./routes/teachers');
const db = require('./tools/db');
const config = require('./config');

const app = express();

db.sync({ alter: true })
  .then(() => {
    app.listen(config.PORT, () => {
      console.log(`Сервер запущен на порту ${config.PORT}...`);
    });
  })
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use((err, req, res, next) => {
  if (err) {
    console.error(err.stack);
    res.status(500)
      .json({
        message: 'Что-то пошло не так!'
      });
  }
});

app.use('/users', usersRouter);
app.use('/questions', questionsRouter);
app.use('/system', systemRouter);
app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);

app.get('/', (req, res) => {
  res.status(200);
  res.send({
    message: 'It works'
  });
});

app.get('/pull', ((req, res) => {
  exec('git pull', ((error, stdout) => {
    console.log(stdout);
  }));
  res.status(200);
  res.send({
    message: 'Git pulled'
  });
}));
