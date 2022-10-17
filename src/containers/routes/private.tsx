import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from 'store/reducers';

interface IPrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
  const location = useLocation();

  const { accountDetails } = useSelector((state: RootState) => ({
    accountDetails: state.account,
  }));

  if (!accountDetails?.accountId) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return props.children;
};

export default PrivateRoute;
