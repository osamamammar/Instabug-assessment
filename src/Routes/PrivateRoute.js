import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("userInfo");

  return isLoggedIn ? children : <Navigate to="/" />;
};
