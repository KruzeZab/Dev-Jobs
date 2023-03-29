import { useState } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  outlet: JSX.Element;
}

const PrivateRoute = ({ outlet }: PrivateRouteProps) => {
  const user = useState(false);

  if (user) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: "login/" }} replace />;
  }
};

export default PrivateRoute;
