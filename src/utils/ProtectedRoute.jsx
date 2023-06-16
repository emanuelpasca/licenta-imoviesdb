import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";
import useUserDetails from "../hooks/UserDetailsHook";
import { PagePaths } from "../pages/pages";

const ProtectedRoute = ({ children }) => {
  const { user: userAuthData } = useUserAuth();

  if (userAuthData) return <Fragment>{children}</Fragment>;

  return <Navigate to={PagePaths.LOGIN}></Navigate>;
};

export default ProtectedRoute;
