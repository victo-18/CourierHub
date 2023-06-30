import { Navigate } from "react-router-dom";
import { ROLES } from "../hooks/roles/constants";
import BranchesControl from "../pages/BranchesControl";
import Entregas from "../pages/Entregas";
import { Home } from "../pages/Home";
import ListaMensajeros from "../pages/ListaMensajeros";
import LoginPage from "../pages/LoginPage";
import { Logout } from "../pages/Logout";
import { NuevoPedido } from "../pages/NuevoPedido";
import OrderSummary from "../pages/OrderSummary";
import ErrorPage from "../pages/PageError";
import Perfil from "../pages/Perfil";
// import NewRequest from "../sections/NewRequest";

const routes = [
  {
    path: "/dashboard",
    label: "Inicio",
    role: ROLES.CLIENTE,
    element: <Home />,
    children: [{ path: "nuevo", element: <NuevoPedido /> }],
  },
  {
    path: "/sucursales",
    label: "Sucursales",
    role: ROLES.CLIENTE,
    element: <BranchesControl />,
  },
  {
    path: "/historialpedidos",
    label: "Historial",
    role: ROLES.CLIENTE,
    element: <OrderSummary />,
  },
  // {
  //   path: "/nuevospedidos",
  //   label: "Nuevos pedidos",
  //   role: ROLES.ADMINISTRADOR,
  //   element: <NewRequest />,
  // },
  {
    path: "/mensajero",
    label: "Mensajeros",
    role: ROLES.ADMINISTRADOR,
    element: <ListaMensajeros />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/entregas",
    label: "Entregas",
    role: ROLES.MENSAJERO,
    element: <Entregas />,
  },
  {
    path: "/profile",
    label: "Perfil",
    role: ROLES.ALL,
    element: <Perfil />,
  },
  {
    path: "/logout",
    label: "Cerrar sesion",
    role: ROLES.ALL,
    element: <Logout />,
  },
  {
    children: [
      { element: <Navigate to="/dashboard" />, index: true },
      { path: "404", element: <ErrorPage /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];

export default routes;
