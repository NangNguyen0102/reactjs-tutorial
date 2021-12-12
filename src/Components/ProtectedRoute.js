import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Auth from "../Auth";

const ProtectedRoute = () => {
  const isAuth = Auth.isAuthenticated();
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isAuth === true ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
