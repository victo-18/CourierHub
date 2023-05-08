import { AUTHORIZE, SET_TOKEN, SET_USER, UNAUTHORIZE } from "../actions/userActions";

const initialState = {
    auth: false,
    token: "",
    user: {},
};

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