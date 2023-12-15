import React from "react";
import "./Signbtn.css";
import { Link } from "react-router-dom";

const Signbtn = () => {
  return (
    <section className="login-btn">
      <Link to="/login">
        <button>Login</button>
      </Link>
    </section>
  );
};

export default Signbtn;
