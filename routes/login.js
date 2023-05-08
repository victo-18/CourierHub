require('dotenv').config();

var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/Models');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  // Busca al usuario en la base de datos por su email
  const user = await User.findOne({ where: { phone: username } });

  // Si no existe, envía un mensaje de error
  if (!user) return res.status(400).json({ message: 'El usuario no existe' });

  // Si existe, compara la contraseña ingresada con la almacenada en la base de datos
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  // Si las contraseñas no coinciden, envía un mensaje de error
  if (!isPasswordMatch) return res.status(400).json({ message: 'Usuario o contraseña incorrecta' });

  // Si las contraseñas coinciden, genera un token de autenticación y lo devuelve en la respuesta
  const token = jwt.sign({ phone: user.dataValues.phone }, process.env.SECRET, { expiresIn: "1d" });

  const user_copy = { ...user.dataValues };
  delete user_copy.password;
  delete user_copy.createdAt;
  delete user_copy.updatedAt;

  res.json({ user: user_copy, token, message: "¡Genial!, iniciaste sesion correctamente" });
});

module.exports = router;
