import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from 'store/reducers';

interface IPublicRouteProps {
  children: JSX.Element;
}

const PublicRoute = (props: IPublicRouteProps) => {
  const location = useLocation();

  const { accountDetails } = useSelector((state: RootState) => ({
    accountDetails: state.account,
  }));

  const to = location?.state?.from?.pathname;

  if (to && accountDetails?.accountId) {
    return <Navigate to={to} state={{ from: location }} replace />;
  }

  return props.children;
};

export default PublicRoute;
