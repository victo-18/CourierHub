import axios from "axios";
import { ResetInfo, SetInfo, Unauthorize, store } from "../redux";
import { addSnackbar } from "../redux/actions/snackbarActions";

// eslint-disable-next-line no-undef
export const isProduction = process.env.NODE_ENV === "production";

axios.defaults.baseURL = isProduction ? "" : getProxy();
axios.defaults.headers.common['authorization'] = '';
axios.defaults.withCredentials = true;

// Crea un interceptor axios
axios.interceptors.response.use(
    (response) => {
        // Si la respuesta es exitosa pinta un mensaje si esta disponible y devuelve la respuesta
        if ("message" in response.data && response.status == 200) store.dispatch(addSnackbar(response.data.message, 'success', 6000));

        return response;
    },
    (error) => {
        // Si la respuesta es un error pinta un mensaje si esta disponible y devuelve la respuesta
        if ("message" in error.response.data) store.dispatch(addSnackbar(error.response.data.message, 'error', 6000));

        return Promise.reject(error);
    }
);

// axios.interceptors.request.use(
//     (config) => {
//         const subdomain = getSubdomain();
//         if (subdomain) {
//             config.data = {
//                 ...config.data,
//                 subdomain: subdomain,
//             };
//         }

//         return config;
//     },
//     (error) => Promise.reject(error)
// );

function getProxy() {
    return `http://${window.location.hostname}:8080`;
}

function removeAuthorizationToken() {
    delete axios.defaults.headers.common["authorization"];
}

export function setAuthorizationToken(token) {
    axios.defaults.headers.common["authorization"] = token;
}

export function logout(expire = false) {
    removeAuthorizationToken();
    store.dispatch(ResetInfo());

    if (expire) store.dispatch(SetInfo({ type: "warning", message: "¡Lo sentimos! Tu sesión ha expirado" }));
    else store.dispatch(SetInfo({ type: "info", message: "¡Listo! Hemos cerrado tu sesión" }));

    store.dispatch(Unauthorize());
}

export function API_Login(data) {
    return axios.post('/login', data);
}

export default axios;