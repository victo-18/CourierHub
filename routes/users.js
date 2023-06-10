var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('¡Genial! Puedes ver esto');
});

module.exports = router;
