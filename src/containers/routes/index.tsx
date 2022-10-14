import * as React from 'react';
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

const AccountPage = React.lazy(() => import('pages/account'));
const HomePage = React.lazy(() => import('pages/home'));
const NotFoundPage = React.lazy(() => import('pages/not-found'));
const PricingPage = React.lazy(() => import('pages/pricing'));
const ProductsPage = React.lazy(() => import('pages/products'));

const AppRoutes = () => {
  const [user, loading, error] = useAuthState(getAuth());

  const { isAppLoaded } = useSelector((state: RootState) => ({
    isAppLoaded: state.route.isAppLoaded,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isAppLoaded && !loading) {
      dispatch(appInitAction());
    }

    if (isAppLoaded && user) {
      dispatch(loginSuccessAction());
    }
  }, [isAppLoaded, user, loading, error]);

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
