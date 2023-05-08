/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { addSnackbar } from "../redux/actions/snackbarActions";
import { ConfigToken, StateError, StateResponse } from "./interceptors";
import { unAuthorize } from "../redux/actions/userActions";
import { store } from "../redux/store";

// eslint-disable-next-line no-undef
export const isProduction = process.env.NODE_ENV === "production";

axios.defaults.baseURL = isProduction ? "" : getProxy();
axios.defaults.headers.common['authorization'] = '';
axios.defaults.withCredentials = true;

// Interceptor para actualizar el token
axios.interceptors.request.use((config) => ConfigToken(config));

// Interceptor para mensajes, (error, normal)
axios.interceptors.response.use((response) => StateResponse(response), (error) => StateError(error));

export function logout(expire = false) {
    if (!expire)
        store.dispatch(addSnackbar("¡Listo! Hemos cerrado tu sesión", "info", 6000));
    store.dispatch(unAuthorize());
}

function getProxy() {
    return `http://${window.location.hostname}:8080`;
}

export function API_Login(data) {
    return axios.post('/login', data);
}

export function API_Protected() {
    return axios.get('/users');
}
