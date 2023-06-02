/* eslint-disable react-refresh/only-export-components */
/**
 * El tipo de acción que se dispara cuando el usuario se autoriza.
 * @type {string}
 */
export const AUTHORIZE = 'AUTHORIZE';

/**
 * El tipo de acción que se dispara cuando el usuario cierra sesión y se desautoriza.
 * @type {string}
 */
export const UNAUTHORIZE = 'UNAUTHORIZE';

/**
 * El tipo de acción que se dispara para establecer el usuario actual en el estado de la aplicación.
 * @type {string}
 */
export const SET_USER = 'SET_USER';

/**
 * El tipo de acción que se dispara para establecer el token de autenticación actual en el estado de la aplicación.
 * @type {string}
 */
export const SET_TOKEN = 'SET_TOKEN';

/**
 * Creador de acciones de Redux que se utiliza para autorizar al usuario.
 * @returns {Object} Un objeto de acción de Redux con el tipo de acción.
 */
export const authorize = () => {
    return { type: AUTHORIZE }
}

/**
 * Creador de acciones de Redux que se utiliza para desautorizar al usuario.
 * @returns {Object} Un objeto de acción de Redux con el tipo de acción.
 */
export const unAuthorize = () => {
    return { type: UNAUTHORIZE }
}

/**
 * Creador de acciones de Redux que se utiliza para establecer el usuario actual en el estado de la aplicación.
 * @param {Object} user - El objeto de usuario que se va a establecer en el estado de la aplicación.
 * @param {string} [token=""] - El token de autenticación que se va a establecer en el estado de la aplicación (opcional).
 * @returns {Object} Un objeto de acción de Redux con el tipo de acción y la carga útil.
 */
export const setUser = (user, token = "") => {
    return {
        type: SET_USER,
        payload: { 'user': user, 'token': token }
    }
}

/**
 * Creador de acciones de Redux que se utiliza para establecer el token de autenticación actual en el estado de la aplicación.
 * @param {string} token - El token de autenticación que se va a establecer en el estado de la aplicación.
 * @returns {Object} Un objeto de acción de Redux con el tipo de acción y la carga útil.
 */
export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: { token }
    }
}
