import { Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import ListaMensajeros from '../pages/ListaMensajeros';
//import LoginPage from '../pages/LoginPage';
import { Logout } from '../pages/Logout';
//import ListaMensajeros from '../pages/ListaMensajeros';
import LoginPage from '../pages/LoginPage';
//import { Logout } from '../pages/Logout';
import ErrorPage from '../pages/PageError';
import Perfil from '../pages/Perfil';
import NewRequest from '../sections/NewRequest';
import EditarPerfil from '../pages/EditarPerfil';

const routes = [
  {
    path: "/dashboard",
    element: <Home />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: '/mensajero',
    element: < ListaMensajeros />,
  },
  // {
  //   path: '/entregas',
  //   element: <Entregas />,
  // },
  {
    path: '/solicitudes',
    element: <NewRequest />,
  },
 
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: '/profile',
    element: <Perfil />,
    children: [
      { path: "edit", element: <EditarPerfil /> }
    ]
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
