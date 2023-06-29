var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const multer = require('multer');
const application = require("express")
const { route } = require('express/lib/application');
const { Request, ListState} = require('./db/Models');

var indexRouter = require('./routes/index');
var adminRouter = require("./routes/admin/index");
var userRouter = require("./routes/users");
var requestRouter = require('./routes/request');
var clientRouter = require('./routes/client');
var courrierRouter = require('./routes/courrier');
var generalRouter = require("./routes/general");
var loginRouter = require('./routes/login');
var citiesRouter = require('./routes/city');
var delegatesRouter = require('./routes/delegates');
var branchesRouter = require('./routes/branches');

const { sequelize } = require('./db/Models');
const { insertDummy } = require('./db/dummy');
const { authMiddleware } = require('./middleware/auth');
const { clientMiddleware, adminMiddleware, courierMiddleware } = require('./middleware/roles');

var app = express();

app.use(cors({ origin: ['http://localhost:5173', "http://192.168.1.5:5173"], credentials: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// pruebas multer para img en server
//Pruebas IMG MULTER

const storage =multer.diskStorage({
  destination: './requestImg',
  filename: async (req,file,cb) =>{
    const ext = file.originalname.split('.').pop()
    let nameImg = `${Date.now()}_${file.originalname}`;
    imgName = nameImg;
    cb(null,nameImg)
  }
});

const uploadF = multer({storage: storage})

/*
  const storage =multer.diskStorage({
  destination: (req,file,cb) =>{
    cb(null, './requestImg')
  },
  filename:(req,file,cb) =>{
    const ext = file.originalname.split('.').pop()
    cb(null, `${Date.now()}.${ext}`)
  }
});

const uploadF = multer({storage})
*/
// Servir los archivos estáticos desde la carpeta 'build'
app.use(express.static(path.join(__dirname, 'dist')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/general/', authMiddleware, generalRouter);
app.use('/api/v1/user/', authMiddleware, userRouter);

app.use('/api/v1/admin/', authMiddleware, adminMiddleware, adminRouter);

app.use('/api/v1/request', authMiddleware, courierMiddleware, requestRouter);
app.use('/api/v1/clients', authMiddleware, clientMiddleware, clientRouter);
app.use('/api/v1/delegates', authMiddleware, clientMiddleware, delegatesRouter);
app.use('/cities', authMiddleware, clientMiddleware, citiesRouter);
app.use('/api/v1/branches', authMiddleware, clientMiddleware, branchesRouter);

app.use('/api/v1/courriers', authMiddleware, courierMiddleware, courrierRouter);

app.use('/api/v1/login', loginRouter);
//prueba peticion post multer

app.post('/api/v1/imgFileF',uploadF.single('file'),(req, res)=>{
  const {file} = req.file
  console.log(req.body.code)
  console.log(req.file.filename)
  const updatePhase = ListState.create({
    requestCode: req.body.code,
    image: req.file.filename,
    phase:"ENTREGADO"
  });
  res.send({file:'imagen cargada',"name": file})
})

app.post('/api/v1/imgFileS',uploadF.single('file'),(req, res)=>{
  const {file} = req.file
  console.log(req.body.code)
  console.log(req.file.filename)
  const updatePhase = ListState.update({
    image: req.file.filename},{
    where:{
      id: req.body.code
    }
  });
  res.send({file:'imagen cargada',"name": file})
})
/*
app.post('/upLoadF',uploadF.single('file'),(req, res)=>{
  res.send({data:'imagen cargada'})
});
*/
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
