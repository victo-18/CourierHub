import { Navigate } from 'react-router-dom';
import Entregas from '../pages/Entregas';
import { Home } from '../pages/Home';
import ListaMensajeros from '../pages/ListaMensajeros';
import LoginPage from '../pages/LoginPage';
import { Logout } from '../pages/Logout';
import ErrorPage from '../pages/PageError';
import Perfil from '../pages/Perfil';
import NewRequest from '../sections/NewRequest';
import BranchesControl from '../pages/BranchesControl';
import OrderSummary from '../pages/OrderSummary'; 
import EditarPerfil from '../pages/EditarPerfil';
import { NuevoPedido } from '../pages/NuevoPedido';

const routes = [
  {
    path: "/dashboard",
    label: "Inicio",
    element: <Home />,
    children: [
      { path: "nuevo", element: <NuevoPedido /> }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: '/mensajero',
    element: < ListaMensajeros />,
  },
  {
    path: '/entregas',
    element: <Entregas />,
  },
  {
    path: '/nuevospedidos',
    element: <NewRequest />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: '/profile',
    label: 'Perfil',
    element: <Perfil />,
    children: [
      { path: "edit", element: <EditarPerfil /> }
    ]
  },
  {
    path: '/sucursales',
    element: <BranchesControl />
  },
  {
    path: '/historialpedidos',
    element: < OrderSummary />
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
