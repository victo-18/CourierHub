var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { Customer, User } = require('../db/Models');

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

/* Actualiza las tablas Customer y User*/
router.put('/update', async (req, res) =>{

  const {firstname, lastname, address, city, oldPhone, newPhone, email, password} = req.body
  var contrasena = "";
  var data ="";

  //Validación que evalua si se envía una nueva contraseña
  if(!password == ""){

     //Se encripta la nueva contraseña 
      contrasena = password;
      contrasena = contrasena.encode('utf-8');
      data = bcrypt.hash(contrasena, bcrypt.genSalt());
    try {
      await User.update(
        {phone: newPhone, firtsName: firstname, lastname: lastname,
         address: address, city: city, email: email, password: data },
        {where:{
          phone: oldPhone
        }});
        try {
          await Customer.update(
            {phone: newPhone},
            {where: {
              phone: oldPhone
            }});
            res.send(true);
        } catch (error) {
          console.error(error)
          res.send(false);
        }
    } catch (error) {
      console.error(error);
      res.send(false);
    }
  }else{
    try {
      await User.update(
        {phone: newPhone, firtsName: firstname, lastname: lastname,
         address: address, city: city, email: email },
        {where:{
          phone: oldPhone
        }});
        try {
          await Customer.update(
            {phone: newPhone},
            {where: {
              phone: oldPhone
            }});
            res.send(true);
        } catch (error) {
          console.error(error)
          res.send(false);
        }
    } catch (error) {
      console.error(error);
      res.send(false);
    }
  }

})
module.exports = router;
