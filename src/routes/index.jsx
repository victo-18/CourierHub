import { Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import ListaMensajeros from '../pages/ListaMensajeros';
//import LoginPage from '../pages/LoginPage';
import { Logout } from '../pages/Logout';
//import ListaMensajeros from '../pages/ListaMensajeros';
import LoginPage from '../pages/LoginPage';
//import { Logout } from '../pages/Logout';
import ErrorPage from '../pages/PageError';
import UserProfile from '../pages/UserProfile';
import NewRequest from '../pages/NewRequest';

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
