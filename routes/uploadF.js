var express = require('express');
var path = require('path');
const cors = require('cors');
const multer = require('multer');
var router = express.Router();

// pruebas multer para img en server
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

  router.post('/img',uploadF.single('file'),(req, res)=>{
    res.send({data:'imagen cargada'})
  })

module.exports = router;