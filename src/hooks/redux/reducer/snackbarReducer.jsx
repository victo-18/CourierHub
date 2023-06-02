import { ADD_SNACKBAR, REMOVE_SNACKBAR } from '../actions/snackbarActions';
// Define un estado inicial para el reductor
const initialState = {
    snackbars: [],
};
/**
 * Define un reductor para manejar el estado de las barras de notificación
 * @param {Object} state - El estado actual si esta disponible o el estado inicial.
 * @param {Object} action - El objeto que contiene el tipo y el payload de la accion.
 * @returns {Object} Un objeto estado de Redux actualizado o el mismo estado anterior.
 */
const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        // Maneja la acción para agregar una nueva barra de notificación al estado
        case ADD_SNACKBAR:
            return {
                ...state,
                // Agrega la nueva barra de notificación al arreglo de barras existentes
                snackbars: [...state.snackbars, { ...action.payload, open: true }],
            };
        // Maneja la acción para eliminar una barra de notificación del estado
        case REMOVE_SNACKBAR:
            return {
                ...state,
                // Filtra la barra de notificación a eliminar del arreglo de barras existentes
                snackbars: state.snackbars.filter((snackbar) => snackbar.id !== action.payload.id),
            };
        // Devuelve el estado actual si la acción no es reconocida
        default:
            return state;
    }
};


export default snackbarReducer;
