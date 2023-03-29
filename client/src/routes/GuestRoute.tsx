import { useState } from "react";
import { Navigate } from "react-router-dom";

interface GuestRouteProps {
  outlet: JSX.Element;
}

const GuestRoute = ({ outlet }: GuestRouteProps) => {
  const user = useState(false);

  if (!user) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: "/" }} replace />;
  }
};

export default GuestRoute;
