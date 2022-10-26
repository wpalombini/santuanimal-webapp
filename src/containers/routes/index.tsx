import React, { useEffect, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/ui/layout/Layout';
import LoadingPage from 'pages/loading';
import PublicRoute from './public';
import PrivateRoute from './private';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { appInitAction } from './actions';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { loginSuccessAction } from 'containers/account/actions';

const AccountPage = lazy(() => import('pages/account'));
const HomePage = lazy(() => import('pages/home'));
const NotFoundPage = lazy(() => import('pages/not-found'));
const PricingPage = lazy(() => import('pages/pricing'));
const ProductsPage = lazy(() => import('pages/products'));

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, loading, error] = useAuthState(getAuth());

  const { accountDetails, isAppLoaded } = useSelector((state: RootState) => ({
    isAppLoaded: state.route.isAppLoaded,
    accountDetails: state.account,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAppLoaded && !loading) {
      dispatch(appInitAction());
    }

    if (isAppLoaded && user) {
      dispatch(loginSuccessAction());
    }
  }, [isAppLoaded, user, loading, error]);

  useEffect(() => {
    setIsLoading(Boolean(loading || accountDetails?.loading));
  }, [loading, accountDetails]);

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
