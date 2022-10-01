import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/ui/layout/Layout';
import LoadingPage from 'pages/loading';

const BlogPage = React.lazy(() => import('pages/blog'));
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
                <HomePage />
              </React.Suspense>
            }
          />
          <Route
            path="products"
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <ProductsPage />
              </React.Suspense>
            }
          />
          <Route
            path="pricing"
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <PricingPage />
              </React.Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <BlogPage />
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
