const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/Models');

const adminMiddleware = async (req, res, next) => {
    // Obtener el objeto del usuario desde la base de datos
    const user = await User.findOne({ where: { phone: req.user.phone } });

    // Comprobar si el usuario es un administrador
    if (user.role === 'ADMIN') next();
    else return res.status(401).json({ message: '¡Uups, no estas autorizado!', code: "UNAUTHORIZED" });
};

const clientMiddleware = async (req, res, next) => {
    // Obtener el objeto del usuario desde la base de datos
    const user = await User.findOne({ where: { phone: req.user.phone } });

    // Comprobar si el usuario es un cliente
    if (user.role === 'CLIENT' || user.role === 'ADMIN') next();
    else return res.status(401).json({ message: '¡Uups, no estas autorizado!', code: "UNAUTHORIZED" });
};

const courierMiddleware = async (req, res, next) => {
    // Obtener el objeto del usuario desde la base de datos
    const user = await User.findOne({ where: { phone: req.user.phone } });

    // Comprobar si el usuario es un mensajero
    if (user.role === 'COURIER' || user.role === 'ADMIN') next();
    else return res.status(401).json({ message: '¡Uups, no estas autorizado!', code: "UNAUTHORIZED" });
};

module.exports = { adminMiddleware, clientMiddleware, courierMiddleware };