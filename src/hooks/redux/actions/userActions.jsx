/* eslint-disable react-refresh/only-export-components */
export const AUTHORIZE = 'AUTHORIZE';
export const UNAUTHORIZE = 'UNAUTHORIZE';
export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';

export const authorize = () => {
    return { type: AUTHORIZE }
}

export const unAuthorize = () => {
    return { type: UNAUTHORIZE }
}

export const setUser = (user, token = "") => {
    return {
        type: SET_USER,
        payload: { 'user': user, 'token': token }
    }
}

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: { token }
    }
}