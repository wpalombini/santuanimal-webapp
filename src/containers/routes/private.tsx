import React from 'react';
import { useAuthenticationState } from 'lib/utils/firebase';
import { Navigate, useLocation } from 'react-router-dom';

interface IPrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
  const location = useLocation();

  const [user] = useAuthenticationState();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return props.children;
};

export default PrivateRoute;
