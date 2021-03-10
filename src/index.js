const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
global.app = app;

require('./routes');
const db = require('./tools/db');
const config = require('./config');

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
