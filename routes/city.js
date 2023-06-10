var express = require('express');
var router = express.Router();
const { City } = require('../db/Models');

//Devuelve todas las ciudades almacenadas en la base de datos
router.get('/', async (req, res) =>{
    try {
        const response = await City.findAll({
            attributes: ['name','id'],
            order: ['name','id']
        });
      res.json(response);
    } catch (error) {
        console.error(error);
    }
    
});

module.exports = router;