import { Navigate } from 'react-router-dom';
import ErrorPage from '../pages/PageError';
import LoginPage from '../pages/LoginPage';
import { Home } from '../pages/Home';
import { Logout } from '../pages/Logout';
import ListaMensajeros from '../pages/ListaMensajeros';
//import DeliveryDay from '../sections/DeliveryDay';
import NewRequest from '../sections/NewRequest';
import Entregas from '../pages/Entregas';
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
    element: <Entregas/>,
  },
  {
    path:'/nuevospedidos',
    element: <NewRequest />,
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
