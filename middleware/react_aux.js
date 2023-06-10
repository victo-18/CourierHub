/**
 * Establece los encabezados de respuesta para el mensaje de respuesta y el código de respuesta.
 *
 * @param {object} res - Objeto de respuesta de Express.
 * @param {string} message - Mensaje de respuesta que se enviará en la respuesta.
 * @param {string} [code=""] - Código de respuesta que se enviará en la respuesta.
 */
function setMessage(res, message, code = "") {
    res.setHeader('Access-Control-Expose-Headers', 'X-Message, X-Code');
    res.setHeader("X-Message", message);
    res.setHeader("X-Code", code);
}

/**
 * Establece el encabezado de respuesta para el token de autorización.
 *
 * @param {object} res - Objeto de respuesta de Express.
 * @param {string} token - Token de autorización que se enviará en la respuesta.
 */
function setToken(res, token) {
    res.setHeader('Access-Control-Expose-Headers', 'X-Authorization');
    res.setHeader('X-Authorization', token);
}


module.exports = { setMessage, setToken };