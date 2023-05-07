const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    // Si no se proporciona un token, envía un mensaje de error
    if (!token) return res.status(401).json({ message: 'No se proporcionó un token de autenticación' });

    try {
        // Verifica la validez del token
        const decoded = jwt.verify(token, process.env.SECRET);

        // Agrega el objeto del usuario decodificado a la solicitud
        req.user = decoded;

        // Continúa con la siguiente función del middleware
        next();
    } catch (error) {
        // Si el token no es válido, envía un mensaje de error
        return res.status(401).json({ message: 'Autenticación inválida' });
    }
};

module.exports = { authMiddleware };