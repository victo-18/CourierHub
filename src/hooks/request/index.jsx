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
    return `http://${window.location.hostname}:8080/api/v1/`;
}

/**
 * Realiza una solicitud de inicio de sesión al servidor.
 * @param {Object} data - Un objeto que contiene los datos de inicio de sesión del usuario.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_Login(data) {
    return axios.post("login", data);
}

/**
 * Realiza una solicitud de inicio de sesión al servidor.
 * @param {Object} data - Un objeto que contiene los datos de inicio de sesión del usuario.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_Profile() {
    return axios.get("user/profile");
}

/**
 * Realiza una solicitud de inicio de sesión al servidor.
 * @param {Object} data - Un objeto que contiene los datos de inicio de sesión del usuario.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_UpdateProfile(data) {
    return axios.post("user/profile", data);
}


/**
 * Realiza una solicitud al servidor para obtener información protegida.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_Protected() {
    return axios.get("users");
}

/**
 * Realiza una solicitud al servidor para obtener información protegida.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_AllRequest() {
    return axios.get("request");
}

/**
 * Realiza una solicitud al servidor para obtener información protegida.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_NewRequest(data) {
    return axios.post("request", data);
}


/**
 * Realiza una solicitud al servidor para obtener información protegida.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_AllCities(stateId) {
    return axios.get("general/cities/" + stateId);
}

/**
 * Realiza una solicitud al servidor para obtener información protegida.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_AllStates() {
    return axios.get("general/states/");
}

/**
 * Realiza una solicitud al servidor para obtener información protegida.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_AllTransport() {
    return axios.get("general/transport/");
}

/**
 * Realiza una solicitud al servidor para obtener el historial de pedidos que han sido realizados por el cliente.
 * @param {Object} data - Un objeto que contiene el id del cliente logueado.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_AllHistoryById(data) {
    return axios.get(`/delegates/${data}`);
}

/**
 * Realiza una solicitud al servidor con el objetivo de enlistar las sucursales de un cliente.
 * @param {Object} data - Un objeto que contiene el id del cliente logueado.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_AllBranchesById(data) {
    return axios.get(`/branches/${data}`);
}

/**
 * Crea una nueva sucursal en la base de datos.
 * @param {Object} data - Un objeto que contiene el cuerpo de la sucursal.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_POSTBranch(data){
    return axios.post(`/branches/crear`, data);
}

/**
 * Realiza una modificación de una sucursal en la base de datos.
 * @param {Object} body - Un objeto que contiene los nuevos datos de la sucursal. 
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_PutBranch(body) {
    return axios.put(`/branches/modifica`, body);
}

/**
 * Elimina una sucursal en la base de datos.
 * @param {Object} data - Un objeto que contiene el nit de la sucursal a eliminar.
 * @returns {Promise} Una promesa que se resuelve con la respuesta del servidor o se rechaza con un error.
 */
export function API_DeleteBranch(data) {
    return axios.delete(`/branches/elimina/${data}`);
}
