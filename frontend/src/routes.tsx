import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/Layouts/Dashboard';
import MainLayout from './components/Layouts/Main';
import DashboardContainer from './containers/Dashboard';
import ProductsContainer from './containers/Products';

import LoginView from './modules/Login/Login';
import NotFoundView from './modules/Errors/NotFound';

const routes = [
    {
        path: 'app',
        element: <DashboardLayout />,
        children: [
            // { path: 'account', element: <AccountView /> },
            // { path: 'customers', element: <CustomerListView /> },
            // { path: 'dashboard', element: <DashboardContainer /> },
            { path: 'products', element: <ProductsContainer /> },
            // { path: 'settings', element: <SettingsView /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: 'login', element: <LoginView /> },
            // { path: 'register', element: <RegisterView /> },
            { path: '404', element: <NotFoundView /> },
            { path: '/', element: <Navigate to="/app/products" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
];

export default routes;
