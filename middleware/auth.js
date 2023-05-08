const jwt = require('jsonwebtoken');
const { setMessage, setToken } = require('./aux');

/**
 * Middleware que verifica la autenticación del usuario mediante un token JWT.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @param {Function} next - Función de middleware para llamar a continuación.
 * @returns {void}
 */
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    // Si no se proporciona un token, envía un mensaje de error
    if (!token) {
        setMessage(res, "No se proporcionó un token de autenticación", "INVALID:TOKEN");
        return res.sendStatus(401);
    }

    try {
        // Verifica la validez del token
        const decoded = jwt.verify(token, process.env.SECRET);

        // Agrega el objeto del usuario decodificado a la solicitud
        req.user = decoded;

        const { exp, iat } = decoded;
        const timeLeft = exp * 1000 - Date.now();
        const tenPercent = (exp - iat) * 100 * 0.1;

        if (timeLeft <= tenPercent)
            setToken(res, jwt.sign({ phone: decoded.phone }, process.env.SECRET, { expiresIn: "1h" }))

        // Continúa con la siguiente función del middleware
        next();
    } catch (error) {
        // Si el token no es válido, envía un mensaje de error
        setMessage(res, "Autenticación inválida", "INVALID:TOKEN");
        return res.sendStatus(401);
    }
};

module.exports = { authMiddleware };