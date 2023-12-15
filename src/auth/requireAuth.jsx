import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function RequireAuth() {
  const navigate = useNavigate();

  const isAuth = window.localStorage.getItem("isAuth");

  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, [isAuth]);

  return <Outlet />;
}

export default RequireAuth;
