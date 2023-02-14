import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";
import useUserDetails from "../hooks/UserDetailsHook";
import { PagePaths } from "../pages/pages";

const ProtectedRoute = ({ children }) => {
  const { getCurrentUserDetails } = useUserDetails();
  const { user: userAuthData } = useUserAuth();
  const userDetails = getCurrentUserDetails();

  if (Object.keys(userAuthData).length > 0 && !userDetails)
    return <div>Loading...</div>;

  if (Object.keys(userAuthData).length > 0 && userDetails)
    return <Fragment>{children}</Fragment>;

  return <Navigate to={PagePaths.LANDING}></Navigate>;
};

export default ProtectedRoute;
