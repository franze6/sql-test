const usersRouter = require('./users');
const systemRouter = require('./system');
const questionsRouter = require('./questions');
const studentsRouter = require('./students');
const teachersRouter = require('./teachers');

const { app } = global;

app.use('/users', usersRouter);
app.use('/questions', questionsRouter);
app.use('/system', systemRouter);
app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
