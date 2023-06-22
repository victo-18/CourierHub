import { AUTHORIZE, SET_TOKEN, SET_USER, UNAUTHORIZE } from "../actions/userActions";

/**
 * El estado inicial del reducer de usuario.
 * @type {Object}
 * @property {boolean} auth - Indica si el usuario está autorizado.
 * @property {string} token - El token de autenticación del usuario.
 * @property {Object} user - El objeto de usuario.
 */
const initialState = {
    auth: false,
    token: "",
    user: {},
};

/**
 * Reducer que maneja el estado del usuario.
 * @param {Object} state - El estado actual del reducer.
 * @param {Object} action - La acción a aplicar al estado del reducer.
 * @returns {Object} El nuevo estado del reducer.
 */
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZE:
            return {
                ...state,
                auth: true
            };
        case UNAUTHORIZE:
            return {
                ...initialState
            };
        case SET_USER:
            return {
                ...state,
                auth: true,
                user: { ...action.payload.user },
                token: action.payload.token
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token
            };
        default:
            return state;
    }
};

export default userReducer;