import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from '../layout';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {

  return (
    <Suspense >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([

    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/dashboard/overview" replace />, index: true },
      ]
    },
    {
      path: '/dashboard',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/dashboard/overview" replace />, index: true },
        { path: 'overview', element: <Overview /> },
        { path: 'manage', element: <Manage /> },
        { path: 'add', element: <AddBook /> },
      ]
    },

  ]);
}

const Overview = Loadable(lazy(() => import('../pages/dashboard/Overview')));
const Manage = Loadable(lazy(() => import('../pages/dashboard/Manage')));
const AddBook = Loadable(lazy(() => import('../pages/AddBook')));
