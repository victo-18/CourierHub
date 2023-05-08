import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./reducer/snackbarReducer";
import userReducer from "./reducer/userReducer";

/**
 * La configuración para persistir el estado de Redux utilizando redux-persist.
 * @type {Object}
 * @property {string} key - La clave utilizada para almacenar el estado persistido.
 * @property {number} version - La versión actual de la persistencia.
 * @property {Object} storage - El objeto de almacenamiento utilizado por redux-persist.
 */
const persistConfig = {
    key: "root",
    version: 1, // Incrementar esta versión para forzar una reescritura completa de la persistencia
    storage,
};

/**
 * El root reducer que combina todos los reducers de la aplicación.
 * @type {Function}
 */
const rootReducer = combineReducers({
    snackbar: snackbarReducer,
    session: userReducer,
    // ...otros reductores de tu aplicación aquí
});

/**
 * El reducer persistido que utiliza redux-persist.
 * @type {Function}
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * La store de Redux configurada con el reducer persistido y middleware personalizado.
 * @type {Object}
 */
const store = configureStore({ reducer: persistedReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }) })

/**
 * El persistor de Redux que se encarga de persistir el estado de la store.
 * @type {Object}
 */
const persistor = persistStore(store);

/**
 * Función que se ejecuta cada vez que cambia el estado de la store.
 */
store.subscribe(() => {
    console.log(store.getState());
})

export { store, persistor };