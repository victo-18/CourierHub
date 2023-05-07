export const ADD_SNACKBAR = 'ADD_SNACKBAR';
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';

export const addSnackbar = (message, severity, duration) => {
    const id = new Date().getTime().toString(); // generar un ID único para cada snackbar
    return {
        type: ADD_SNACKBAR,
        payload: { id, message, severity, duration },
    };
};

export const removeSnackbar = (id) => {
    return {
        type: REMOVE_SNACKBAR,
        payload: { id },
    };
};
