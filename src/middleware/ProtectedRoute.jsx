import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { isSignedIn } = useUser();
  const location = useLocation();

  if (!isSignedIn) {
    return <Navigate to="/" state={{ from: location }} replace />; // Redirect with state
  }

  return <Outlet />;
};

export default ProtectedRoute;
