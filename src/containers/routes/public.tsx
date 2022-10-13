interface IPublicRouteProps {
  children: JSX.Element;
}

const PublicRoute = (props: IPublicRouteProps) => {
  return props.children;
};

export default PublicRoute;
