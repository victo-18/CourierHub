var express = require('express');
const { User, City, State } = require('../db/Models');
var router = express.Router();
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('¡Genial! Puedes ver esto');
});

/* Obtiene todos los usuarios registrados en la BD*/
router.get('/all', async (req, res) => {
  try {
    const response = await User.findAll();
    res.json(response);
  } catch (error) {
    console.error("ha ocurrido un error: ", error);
  }
});

/* GET users listing. */
router.get('/profile', async function (req, res, next) {
  const result = await User.findOne({
    attributes: ["phone", "firstname", "lastname", "address", "email", "cityId"],
    where: { phone: req.user.phone }
  })
  const city = await City.findOne({ where: { id: result.get('cityId') } })
  const state = await State.findOne({ attributes: [['id', 'stateId']], where: { id: city.get('stateId') } })
  res.status(200).json({ ...result.dataValues, ...state.dataValues });
});

router.post('/profile', async function (req, res, next) {
  const result = await User.update({ ...req.body }, { where: { phone: req.user.phone } })
  res.status(200).json(result);
});

module.exports = router;
