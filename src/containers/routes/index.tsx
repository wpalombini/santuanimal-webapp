import React, { useEffect, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/ui/layout/Layout';
import LoadingPage from 'pages/loading';
import PublicRoute from './public';
import PrivateRoute from './private';
import { useGetAccountDetails } from 'containers/account';
import { useAuthenticationState } from 'lib/utils/firebase';

const AccountPage = lazy(() => import('pages/account'));
const HomePage = lazy(() => import('pages/home'));
const NotFoundPage = lazy(() => import('pages/not-found'));
const PricingPage = lazy(() => import('pages/pricing'));
const ProductsPage = lazy(() => import('pages/products'));

const AppRoutes = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, loading, error] = useAuthenticationState();

  const accountDetails = useGetAccountDetails();

  useEffect(() => {
    if (!isAppLoaded && !loading) {
      setIsAppLoaded(true);
    } else if (isAppLoaded && user) {
      // dispatch(loginSuccessAction());
    }
  }, [isAppLoaded, user, loading, error]);

  useEffect(() => {
    setIsLoading(Boolean(loading || accountDetails?.isLoading));
  }, [loading, accountDetails.data]);

  if (!isAppLoaded) {
    return <LoadingPage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="products"
            element={
              <PublicRoute>
                <ProductsPage />
              </PublicRoute>
            }
          />
          <Route
            path="pricing"
            element={
              <PublicRoute>
                <PricingPage />
              </PublicRoute>
            }
          />
          <Route
            path="account"
            element={
              isLoading ? (
                <LoadingPage />
              ) : (
                <PrivateRoute>
                  <AccountPage />
                </PrivateRoute>
              )
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
