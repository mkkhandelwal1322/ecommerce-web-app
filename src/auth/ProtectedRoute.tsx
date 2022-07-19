import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, path = "/" }: any) => {
  const { currentUser } = useSelector((state: any) => state.user);
  if (currentUser === null) {
    return <Navigate to={path} replace />;
  }
  return children;
};

export default ProtectedRoute;
