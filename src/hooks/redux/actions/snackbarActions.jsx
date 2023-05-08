/**
 * Tipo de acción de Redux que se utiliza para agregar un nuevo snackbar al estado de la aplicación.
 * @constant {string}
 */
export const ADD_SNACKBAR = 'ADD_SNACKBAR';

/**
 * Tipo de acción de Redux que se utiliza para eliminar un snackbar del estado de la aplicación.
 * @constant {string}
 */
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';

/**
 * Creador de acciones de Redux que se utiliza para agregar un nuevo snackbar al estado de la aplicación.
 * @param {string} message - El mensaje que se muestra en el snackbar.
 * @param {string} severity - La gravedad del mensaje (por ejemplo, "éxito", "advertencia" o "error").
 * @param {number} duration - La duración en milisegundos que el snackbar se muestra antes de desaparecer automáticamente.
 * @returns {Object} Un objeto de acción de Redux con el tipo de acción y la carga útil.
 */
export const addSnackbar = (message, severity, duration) => {
    const id = new Date().getTime().toString(); // Genera un ID único para cada snackbar.
    return {
        type: ADD_SNACKBAR,
        payload: { id, message, severity, duration },
    };
};

/**
 * Creador de acciones de Redux que se utiliza para eliminar un snackbar del estado de la aplicación.
 * @param {string} id - El ID único del snackbar que se va a eliminar.
 * @returns {Object} Un objeto de acción de Redux con el tipo de acción y la carga útil.
 */
export const removeSnackbar = (id) => {
    return {
        type: REMOVE_SNACKBAR,
        payload: { id },
    };
};
