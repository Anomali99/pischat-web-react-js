import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("login") === "true";
};

const AuthRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/" /> : children;
};

export default AuthRoute;
