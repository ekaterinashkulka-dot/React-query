import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated }) => {
  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
