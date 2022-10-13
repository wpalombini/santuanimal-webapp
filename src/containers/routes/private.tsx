interface IPrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
  return props.children;
};

export default PrivateRoute;
