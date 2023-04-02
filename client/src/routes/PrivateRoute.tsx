import { useRef } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  outlet: JSX.Element;
}

const PrivateRoute = ({ outlet }: PrivateRouteProps) => {
  const user = useRef<null>(null);

  if (user.current) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: "/login" }} />;
  }
};

export default PrivateRoute;
