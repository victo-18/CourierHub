var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientRouter = require('./routes/client');
var courrierRouter = require('./routes/courrier');
var loginRouter = require('./routes/login');

const { sequelize } = require('./db/Models');
const { insertDummy } = require('./db/dummy');
const { authMiddleware } = require('./middleware/auth');
const { clientMiddleware, adminMiddleware, courierMiddleware } = require('./middleware/roles');

var app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', authMiddleware, adminMiddleware, usersRouter);
app.use('/clients', authMiddleware, clientMiddleware, clientRouter);
app.use('/courriers', authMiddleware, courierMiddleware, courrierRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // await sequelize.sync({ force: true });
    insertDummy();

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = app;
