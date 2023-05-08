import { addSnackbar } from "../redux/actions/snackbarActions";
import { store } from "../redux/store";

export function StateResponse(response) {
    // Si la respuesta es exitosa pinta un mensaje si esta disponible y devuelve la respuesta
    if (isJSON(response.data) && "message" in response.data && response.status == 200) {
        store.dispatch(addSnackbar(response.data.message, 'success', 6000));
    }

    // if ("new-authorization" in response.headers) {
    //     store.dispatch(SetToken({ token: response.headers["new-authorization"] }));
    // }

    return response;
}

export function StateError(error) {
    // Si la respuesta es un error pinta un mensaje si esta disponible y devuelve la respuesta
    if (isJSON(error.response.data) && "message" in error.response.data) {

        // Accion adicional dependiendo del codigo de error
        switch (error.response.data.code) {
            case "INVALID:TOKEN":
                location.href = "/logout";
                break;
            case "UNAUTHORIZED":
                location.href = "/dashboard";
                break;
        }

        store.dispatch(addSnackbar(error.response.data.message, 'error', 6000));
    }
    return Promise.reject(error);
}

export function ConfigToken(config) {
    const token = store.getState().session.token;

    if (config.headers['Authorization'] !== token) config.headers['Authorization'] = `${token}`;

    return config;
}

function isJSON(variable) {
    switch (typeof variable) {
        case "object":
            return (!Array.isArray(variable) || (variable));
        default:
            return false;
    }
}
