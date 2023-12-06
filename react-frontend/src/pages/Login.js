import React from "react";
import "../styles/Login.css";

import PersonIcon from "@mui/icons-material/Person";
import FiberPinIcon from "@mui/icons-material/FiberPin";

function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="ID" requuired />
            <PersonIcon className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Pin" requuired />
            <FiberPinIcon className="icon" />
          </div>
        </form>
        <div className="remember">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
        </div>

        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default Login;
