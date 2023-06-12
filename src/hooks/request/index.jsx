/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { ConfigToken, StateError, StateResponse } from "./interceptors";

// eslint-disable-next-line no-undef
export const isProduction = process.env.NODE_ENV === "production";

axios.defaults.baseURL = isProduction ? "" : getProxy();
axios.defaults.withCredentials = true;

/**
 * Configura un interceptor para todas las solicitudes de Axios que agrega el token de autorización 
 * a los encabezados de la solicitud si no está presente.
 */
axios.interceptors.request.use((config) => ConfigToken(config));

/**
 * Configura un interceptor para todas las respuestas de Axios que maneja los mensajes de estado y los errores.
 * Si la respuesta es exitosa, pinta un mensaje si está disponible y devuelve la respuesta.
 * Si la respuesta contiene "x-authorization", actualiza el token.
 * Si la respuesta contiene un código de error "INVALID:TOKEN" o "UNAUTHORIZED", redirecciona a una página diferente.
 * Si hay un error en la respuesta, se rechaza la promesa con el error.
 */
axios.interceptors.response.use(
    (response) => StateResponse(response),
    (error) => StateError(error)
);

/**
 * Devuelve una cadena que representa la dirección URL del servidor proxy en el que se está ejecutando la aplicación.
 */
function getProxy() {
    return `http://${window.location.hostname}:8080`;
}

/**
 * Realiza una solicitud de inicio de sesión al servidor.
 * @param {Object} data - Un objeto que contiene los datos de inicio de sesión del usuario.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_Login(data) {
    return axios.post('api/v1/login', data);
}

/**
 * Realiza una solicitud al servidor para obtener información protegida.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_Protected() {
    return axios.get('api/v1/users');
}

/**
 * Realiza una solicitud al servidor para obtener información protegida de los pedidos solicitados.
 * @returns {Promise} Una promesa que contiene todos los datos de los pedidos solicitados.
 */
export function API_DeliveryInProgress() {
    return axios.get('api/v1/request/inProgress');
}