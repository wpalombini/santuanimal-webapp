import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/ui/layout/Layout';
import LoadingPage from 'pages/loading';
import PublicRoute from './public';
import PrivateRoute from './private';

const AccountPage = React.lazy(() => import('pages/account'));
const HomePage = React.lazy(() => import('pages/home'));
const NotFoundPage = React.lazy(() => import('pages/not-found'));
const PricingPage = React.lazy(() => import('pages/pricing'));
const ProductsPage = React.lazy(() => import('pages/products'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              </React.Suspense>
            }
          />
          <Route
            path="products"
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <PublicRoute>
                  <ProductsPage />
                </PublicRoute>
              </React.Suspense>
            }
          />
          <Route
            path="pricing"
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <PublicRoute>
                  <PricingPage />
                </PublicRoute>
              </React.Suspense>
            }
          />
          <Route
            path="account"
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <PrivateRoute>
                  <AccountPage />
                </PrivateRoute>
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <NotFoundPage />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
