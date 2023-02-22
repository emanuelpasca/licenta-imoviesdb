import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";
import useUserDetails from "../hooks/UserDetailsHook";
import { PagePaths } from "../pages/pages";

const ProtectedRoute = ({ children }) => {
  const { getCurrentUserDetails } = useUserDetails();
  const { user: userAuthData } = useUserAuth();
  const userDetails = getCurrentUserDetails();

  if (userAuthData && !userDetails) return <div>Loading...</div>;

  if (userAuthData && userDetails) return <Fragment>{children}</Fragment>;

  return <Navigate to={PagePaths.LOGIN}></Navigate>;
};

export default ProtectedRoute;
