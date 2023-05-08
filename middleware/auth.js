const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    // Si no se proporciona un token, envía un mensaje de error
    if (!token) return res.status(401).json({ message: 'No se proporcionó un token de autenticación', code: 'INVALID:TOKEN' });

    try {
        // Verifica la validez del token
        const decoded = jwt.verify(token, process.env.SECRET);

        // Agrega el objeto del usuario decodificado a la solicitud
        req.user = decoded;

        const { exp, iat } = decoded;
        const timeLeft = exp * 1000 - Date.now();
        const tenPercent = (exp - iat) * 100 * 0.1;

        if (timeLeft <= tenPercent) {
            res.setHeader('Access-Control-Expose-Headers', 'New-Authorization');
            res.setHeader('New-Authorization', jwt.sign({ phone: decoded.phone }, process.env.SECRET, { expiresIn: "1h" }));
        }

        // Continúa con la siguiente función del middleware
        next();
    } catch (error) {
        // Si el token no es válido, envía un mensaje de error
        return res.status(401).json({ message: 'Autenticación inválida', code: 'INVALID:TOKEN' });
    }
};

module.exports = { authMiddleware };