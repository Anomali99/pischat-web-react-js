import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, MainPage, RegisterPage } from "../pages";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AuthRoute>
              <RegisterPage />
            </AuthRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
