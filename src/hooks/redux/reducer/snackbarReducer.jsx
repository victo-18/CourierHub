import { ADD_SNACKBAR, REMOVE_SNACKBAR } from '../actions/snackbarActions';

const initialState = {
    snackbars: [],
};

const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SNACKBAR:
            return {
                ...state,
                snackbars: [...state.snackbars, { ...action.payload, open: true }],
            };
        case REMOVE_SNACKBAR:
            return {
                ...state,
                snackbars: state.snackbars.filter((snackbar) => snackbar.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export default snackbarReducer;
