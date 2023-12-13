// PrivateRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ authenticated, path, element }) => {
  return authenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
