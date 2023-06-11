var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var adminRouter = require("./routes/admin/index");
var requestRouter = require('./routes/request');
var clientRouter = require('./routes/client');
var courrierRouter = require('./routes/courrier');
var loginRouter = require('./routes/login');
var citiesRouter = require('./routes/city');

const { sequelize } = require('./db/Models');
const { insertDummy } = require('./db/dummy');
const { authMiddleware } = require('./middleware/auth');
const { clientMiddleware, adminMiddleware, courierMiddleware } = require('./middleware/roles');

var app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Servir los archivos estáticos desde la carpeta 'build'
app.use(express.static(path.join(__dirname, 'dist')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/', indexRouter);
app.use('/api/v1/admin/', authMiddleware, adminMiddleware, adminRouter);
app.use('/api/v1/request', authMiddleware, clientMiddleware, requestRouter);
app.use('/api/v1/clients', authMiddleware, clientMiddleware, clientRouter);
app.use('/api/v1/courriers', authMiddleware, courierMiddleware, courrierRouter);
app.use('/cities', authMiddleware, clientMiddleware, citiesRouter);
app.use('/api/v1/login', loginRouter);

// Ruta para todas las rutas de React Router
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

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

    insertDummy();

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = app;
