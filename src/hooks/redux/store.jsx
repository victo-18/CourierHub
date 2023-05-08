import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./reducer/snackbarReducer";
import userReducer from "./reducer/userReducer";

const persistConfig = {
    key: "root",
    version: 1, // Incrementar esta versión para forzar una reescritura completa de la persistencia
    storage,
};

const rootReducer = combineReducers({
    snackbar: snackbarReducer,
    session: userReducer,
    // ...otros reductores de tu aplicación aquí
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }) })
const persistor = persistStore(store);

store.subscribe(() => {
    console.log(store.getState());
})

export { store, persistor };