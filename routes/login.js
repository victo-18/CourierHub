require('dotenv').config();

var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/Models');
const { setMessage } = require('../middleware/react_aux');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  // Busca al usuario en la base de datos por su email
  const user = await User.findOne({ where: { phone: username } });

  // Si no existe, envía un mensaje de error
  if (!user) {
    setMessage(res, "El usuario no existe", "NOT_FOUND:USER")
    return res.sendStatus(400);
  }

  // Si existe, compara la contraseña ingresada con la almacenada en la base de datos
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  // Si las contraseñas no coinciden, envía un mensaje de error
  if (!isPasswordMatch) {
    setMessage(res, "Usuario o contraseña incorrecta", "NOT_MATCH:LOGIN")
    return res.sendStatus(400);
  }

  // Si las contraseñas coinciden, genera un token de autenticación y lo devuelve en la respuesta
  const token = jwt.sign({ phone: user.dataValues.phone, role: user.dataValues.role }, process.env.SECRET, { expiresIn: "1d" });

  const user_copy = { ...user.dataValues };
  delete user_copy.password;
  delete user_copy.createdAt;
  delete user_copy.updatedAt;

  setMessage(res, "¡Genial!, iniciaste sesion correctamente", "SUCCESS:LOGIN")
  res.status(200).json({ user: user_copy, token });
});

module.exports = router;
