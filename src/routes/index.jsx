import { Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import ListaMensajeros from '../pages/ListaMensajeros';
import LoginPage from '../pages/LoginPage';
import { Logout } from '../pages/Logout';
import ErrorPage from '../pages/PageError';
//import DeliveryDay from '../sections/DeliveryDay';
import Entregas from '../pages/Entregas';
import NewRequest from '../sections/NewRequest';

const routes = [
  {
    path: '/dashboard',
    element: <Home />
  },
  {
    path: '/login',
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
    path: '/logout',
    element: <Logout />,
  },
  {
    children: [
      { element: <Navigate to="/dashboard" />, index: true },
      { path: '404', element: <ErrorPage /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
];

export default routes;
