import { addSnackbar } from "../redux/actions/snackbarActions";
import { setToken } from "../redux/actions/userActions";
import { store } from "../redux/store";

/**
 * La función StateResponse toma una respuesta de una solicitud HTTP y realiza acciones en función de los encabezados de respuesta.
 * Si la respuesta es exitosa, se muestra un mensaje en la barra de notificaciones (si está disponible) y se actualiza el token de autorización (si está presente).
 * @param {Response} response - La respuesta HTTP recibida de la solicitud.
 * @returns {Response} La misma respuesta recibida.
 */
export function StateResponse(response) {
    // Si la respuesta tiene un código de estado 200 (éxito)
    if (response.status === 200) {

        // Guardamos una referencia a los encabezados de respuesta en una variable local
        const headers = response.headers;

        // Si el encabezado "x-message" está presente en la respuesta, 
        // muestra un mensaje en la barra de notificaciones
        if (headers.has("x-message"))
            store.dispatch(addSnackbar(headers.get("x-message"), "success", 6000));

        // Si el encabezado "x-authorization" está presente en la respuesta, 
        // actualiza el token de autorización
        if (headers.has("x-authorization"))
            store.dispatch(setToken(headers.get("new-authorization")));
    }

    // Devuelve la misma respuesta recibida
    return response;
}


/**
 * La función StateError toma un error devuelto por una solicitud HTTP y realiza acciones en función de los encabezados de respuesta.
 * Si el encabezado "x-message" está presente en el error, se muestra un mensaje de error en la barra de notificaciones.
 * Si el encabezado "x-code" está presente en el error, se realiza una acción específica en función del código de error.
 * @param {Error} error - El error recibido de la solicitud HTTP.
 * @returns {Promise} Una promesa rechazada con el mismo error recibido.
 */
export function StateError(error) {
    // Guardamos una referencia a los encabezados de respuesta en una variable local
    const headers = error.response.headers;

    // Si el encabezado "x-message" está presente en el error, muestra un mensaje de error en la barra de notificaciones
    if (headers.has("x-message")) {
        // Llama a la función dispatch para agregar el mensaje a la barra de notificaciones
        store.dispatch(addSnackbar(headers.get("x-message"), "error", 6000));
    }

    // Si el encabezado "x-code" está presente en el error, realiza una acción específica en función del código de error
    if (headers.has("x-code")) {
        // Usa un switch para comparar el valor del encabezado "x-code" con casos específicos y realizar una acción correspondiente
        switch (headers.get("x-code")) {
            case "INVALID:TOKEN":
                // Si el código es "INVALID:TOKEN", redirige al usuario a la página de inicio de sesión
                location.href = "/logout";
                break;
            case "UNAUTHORIZED":
                // Si el código es "UNAUTHORIZED", redirige al usuario al panel de control
                location.href = "/dashboard";
                break;
        }
    }

    // Devuelve una promesa rechazada con el mismo error recibido
    return Promise.reject(error);
}

/**
 * La función ConfigToken toma una configuración de solicitud HTTP y agrega el token de autorización a los encabezados de la solicitud si no está presente.
 * @param {Object} config - La configuración de la solicitud HTTP.
 * @returns {Object} La misma configuración de la solicitud HTTP, con el token de autorización agregado si es necesario.
 */
export function ConfigToken(config) {
    // Obtiene el token de autorización de la sesión almacenada en el estado de la tienda
    const token = store.getState().session.token;

    // Si el encabezado "Authorization" no está presente en la configuración o no es igual al token almacenado,
    // agrega el token como un encabezado "Authorization" en la configuración
    if (config.headers["Authorization"] !== token) {
        config.headers["Authorization"] = `${token}`;
    }

    // Devuelve la misma configuración de la solicitud HTTP con el token de autorización agregado si es necesario
    return config;
}
