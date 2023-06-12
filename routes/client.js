var express = require('express');
var router = express.Router();
const { Customer } = require('../db/Models');

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

/* Obtiene todos los clientes registrados en la BD*/
router.get('/all', async (req, res) =>{
  try {
    const response = await Customer.findAll();
    res.json(response);
  } catch (error) {
    console.error("ha ocurrido un error: ", error);
  }
});

module.exports = router;
