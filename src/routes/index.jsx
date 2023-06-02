import { Navigate } from 'react-router-dom';
import ErrorPage from '../pages/PageError';
import LoginPage from '../pages/LoginPage';
import { Home } from '../pages/Home';
import ListaMensajeros from '../pages/ListaMensajeros';
import LoginPage from '../pages/LoginPage';
import { Logout } from '../pages/Logout';
import ErrorPage from '../pages/PageError';
import UserProfile from '../pages/UserProfile';
//import DeliveryDay from '../sections/DeliveryDay';
import Entregas from '../pages/Entregas';
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
