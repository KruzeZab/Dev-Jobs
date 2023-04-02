import { useRef } from "react";
import { Navigate } from "react-router-dom";

interface GuestRouteProps {
  outlet: JSX.Element;
}

const GuestRoute = ({ outlet }: GuestRouteProps) => {
  const user = useRef<null>(null);

  if (!user.current) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: "/" }} />;
  }
};

export default GuestRoute;
