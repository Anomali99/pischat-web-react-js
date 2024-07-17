import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("login") === "true";
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
