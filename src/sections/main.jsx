// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import '../styles/App.css';

// theme
import ThemeProvider from '../theme';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import routes from '../routes';
import SnackbarStack from "../components/SnackBar";
import { persistor, store } from "../hooks/redux/store";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <ThemeProvider>
          <SnackbarStack />
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
