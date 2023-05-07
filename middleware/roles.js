const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/Models');

const adminMiddleware = async (req, res, next) => {
    // Obtener el objeto del usuario desde la base de datos
    const user = await User.findOne({ email: req.user.email });

    // Comprobar si el usuario es un administrador
    if (user.role === 'ADMIN') next();
    else return res.status(401).json({ message: 'No autorizado' });
};

const clientMiddleware = async (req, res, next) => {
    // Obtener el objeto del usuario desde la base de datos
    const user = await User.findOne({ email: req.user.email });

    // Comprobar si el usuario es un cliente
    if (user.role === 'CLIENT' || user.role === 'ADMIN') next();
    else return res.status(401).json({ message: 'No autorizado' });
};

const courierMiddleware = async (req, res, next) => {
    // Obtener el objeto del usuario desde la base de datos
    const user = await User.findOne({ email: req.user.email });

    // Comprobar si el usuario es un mensajero
    if (user.role === 'COURIER' || user.role === 'ADMIN') next();
    else return res.status(401).json({ message: 'No autorizado' });
};

module.exports = { adminMiddleware, clientMiddleware, courierMiddleware };