import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, restricted }) => {
  const isLoggedIn = localStorage.getItem("userInfo");

  return isLoggedIn && restricted ? <Navigate to="/welcome" /> : children;
};
