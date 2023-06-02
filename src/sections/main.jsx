// import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";

// theme
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/App.css";

// theme
import SnackbarStack from "../components/SnackBar";
import { persistor, store } from "../hooks/redux/store";
import routes from "../routes";
import ThemeProvider from "../theme";

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
