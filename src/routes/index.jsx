import { Navigate } from 'react-router-dom';
import ErrorPage from '../pages/PageError';
import LoginPage from '../pages/LoginPage';
import { Home } from '../pages/Home';
import { Logout } from '../pages/Logout';
import AdminPage from '../pages/AdminPage';

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
    path: '/AdminPage',
    element: <AdminPage/>,
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
