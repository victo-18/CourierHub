import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./reducer/snackbarReducer";

const DEFAULT_DATA = {
    auth: false,
    user: {},
};

const userSlice = createSlice({
    name: "session",
    initialState: DEFAULT_DATA,
    reducers: {
        Authorize: state => {
            state.auth.isAuth = true;
        },
        Unauthorize: state => {
            state.auth = DEFAULT_DATA.auth;
            state.user = DEFAULT_DATA.user;
        },
        SetUser: (state, data) => {
            const { user, token } = data.payload;
            state.user = { ...user };
            state.auth = { ...state.auth, token };
        }
    },
});

const persistConfig = {
    key: "root",
    version: 2, // Incrementar esta versión para forzar una reescritura completa de la persistencia
    storage,
};

const rootReducer = combineReducers({
    snackbar: snackbarReducer,
    session: userSlice.reducer,
    // ...otros reductores de tu aplicación aquí
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

const persistor = persistStore(store);

store.subscribe(() => {
    console.log(store.getState());
})

export { store, persistor };
export const { Authorize, Unauthorize, SetInfo, ResetInfo, SetUser } = userSlice.actions;