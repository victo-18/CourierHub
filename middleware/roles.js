const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/Models');
const { setMessage } = require('./react_aux');
/**
 * Middleware para comprobar si el usuario es un administrador
 * @param {Object} req - La solicitud HTTP
 * @param {Object} res - La respuesta HTTP
 * @param {Function} next - La función para pasar al siguiente middleware
 */
const adminMiddleware = async (req, res, next) => {
    // Obtener el objeto del usuario desde la base de datos
    const user = await User.findOne({ where: { phone: req.user.phone } });

    // Comprobar si el usuario es un administrador
    if (user.role === 'ADMIN') next();
    else {
        setMessage(res, '¡Uups, no estas autorizado!', "UNAUTHORIZED")
        return res.sendStatus(401);
    };
};

/**
 * Middleware para comprobar si el usuario es un cliente
 * @param {Object} req - La solicitud HTTP
 * @param {Object} res - La respuesta HTTP
 * @param {Function} next - La función para pasar al siguiente middleware
 */
const clientMiddleware = async (req, res, next) => {
    // Obtener el objeto del usuario desde la base de datos
    const user = await User.findOne({ where: { phone: req.user.phone } });

    // Comprobar si el usuario es un cliente
    if (user.role === 'CLIENT' || user.role === 'ADMIN') next();
    else {
        setMessage(res, '¡Uups, no estas autorizado!', "UNAUTHORIZED")
        return res.sendStatus(401);
    };
};

/**
 * Middleware para comprobar si el usuario es un mensajero
 * @param {Object} req - La solicitud HTTP
 * @param {Object} res - La respuesta HTTP
 * @param {Function} next - La función para pasar al siguiente middleware
 */
const courierMiddleware = async (req, res, next) => {
    // Obtener el objeto del usuario desde la base de datos
    const user = await User.findOne({ where: { phone: req.user.phone } });

    // Comprobar si el usuario es un mensajero
    if (user.role === 'COURIER' || user.role === 'ADMIN') next();
    else {
        setMessage(res, '¡Uups, no estas autorizado!', "UNAUTHORIZED")
        return res.sendStatus(401);
    };
};

module.exports = { adminMiddleware, clientMiddleware, courierMiddleware };