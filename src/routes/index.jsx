import { Navigate } from 'react-router-dom';
import { Delivery } from '../pages/Delivery';
import Entregas from '../pages/Entregas';
import ErrorPage from '../pages/PageError';
import LoginPage from '../pages/LoginPage';
import UserProfile from '../pages/UserProfile';
import { Home } from '../pages/Home';
import ListaMensajeros from '../pages/ListaMensajeros';
import { Logout } from '../pages/Logout';
import NewRequest from '../sections/NewRequest';

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
  {
    path: '/entregas',
    element: <Entregas />,
  },
  {
    path: '/nuevospedidos',
    element: <NewRequest />,
  },
  {
    path: '/delivery',
    element: <Delivery />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: '/profile',
    element: <UserProfile />
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
