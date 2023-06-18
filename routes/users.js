var express = require('express');
const { User } = require('../db/Models');
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

/*Obtiene los datos del usuario logueado*/
router.get('/:phone', async (req, res) => {
  const phone = req.params.phone;
  try {
    const response = await User.findOne({ where: { phone } });
    res.json(response);
  } catch (error) {
    console.error("HA OCURRIDO UN ERROR: ", error);
  }
});


/* Actualiza los datos de usuario de la base de datos*/
router.put('/update', async (req, res) => {

  const { firstname, lastname, address, city, oldPhone, phone, email, password } = req.body
  console.log("Esto es password", password)
  //Validación que evalua si se envía una nueva contraseña
  if (!password == "") {
    //Se encripta la nueva contraseña
    const salt = 10;
    const data = bcrypt.hashSync(password, salt);
    console.log("Esto es password cifrado", data)

    try {
      await User.update(
        {
          phone: phone, firstname: firstname, lastname: lastname,
          address: address, cityId: city, email: email, password: data
        },
        {
          where: {
            phone: oldPhone
          }
        });
      res.send(true);
      /*try {
        await Customer.update(
          {phone: phone},
          {where: {
            phone: oldPhone
          }});
          res.send(true);
      } catch (error) {
        console.error(error)
        res.send(false);
      }*/
    } catch (error) {
      console.error(error);
      res.send(false);
    }
  } else {
    try {
      await User.update(
        {
          phone: phone, firstname: firstname, lastname: lastname,
          address: address, cityId: city, email: email
        },
        {
          where: {
            phone: oldPhone
          }
        });
      res.send(true);
      /*try {
        await Customer.update(
          {phone: phone},
          {where: {
            phone: oldPhone
          }});
          res.send(true);
      } catch (error) {
        console.error(error)
        res.send(false);
      }*/
    } catch (error) {
      console.error(error);
      res.send(false);
    }
  }

})

/* GET users listing. */
router.get('/profile', async function (req, res, next) {
  const result = await User.findOne({ where: { phone: req.user.phone } })
  console.log(await result.getCityId());
  res.status(200).json(result);
});

module.exports = router;
