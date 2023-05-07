import { Navigate } from 'react-router-dom';
import ErrorPage from './pages/PageError';
import LoginPage from './pages/LoginPage';

const routes = [
  {
    path: '/dashboard',
    // element: <DashboardLayout />
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    children: [
      { element: <Navigate to="/dashboard/app" />, index: true },
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
