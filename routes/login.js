require('dotenv').config();

var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/Models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  // Busca al usuario en la base de datos por su email
  const user = await User.findOne({ email });

  // Si no existe, envía un mensaje de error
  if (!user) return res.status(400).json({ message: 'El usuario no existe' });

  // Si existe, compara la contraseña ingresada con la almacenada en la base de datos
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  // Si las contraseñas no coinciden, envía un mensaje de error
  if (!isPasswordMatch) return res.status(400).json({ message: 'La contraseña es incorrecta' });

  // Si las contraseñas coinciden, genera un token de autenticación y lo devuelve en la respuesta
  const token = jwt.sign({ ...user }, process.env.SECRET, { expiresIn: "1d" });
  res.json({ token, message: "¡Genial!, iniciaste sesion correctamente" });
});


module.exports = router;
