import React from 'react';
import { useAuthenticationState } from 'lib/utils/firebase';
import { Navigate, useLocation } from 'react-router-dom';

interface IPublicRouteProps {
  children: JSX.Element;
}

const PublicRoute = (props: IPublicRouteProps) => {
  const location = useLocation();

  const [user] = useAuthenticationState();

  const to = location?.state?.from?.pathname;

  if (to && user) {
    return <Navigate to={to} state={{ from: location }} replace />;
  }

  return props.children;
};

export default PublicRoute;
