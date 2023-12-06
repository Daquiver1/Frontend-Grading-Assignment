import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Banner.jpg";
import "../styles/Landing.css";

function Landing() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Missing Grade Reporting System</h1>

        <p>
          This system is designed to help students track and report grades that
          are not recorded in their academic profiles
        </p>
        <Link to="/Login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
