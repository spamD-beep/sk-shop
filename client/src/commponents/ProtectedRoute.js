import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // agar login hi nahi kia to signin page bhej do
    return <Navigate to="/signin" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // agar role allowed nahi hai to home bhej do
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
