import React from "react";
import "./Home.css";
import pic from "../components/images/port.jpeg";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className="grid-container">
        <div className="text-area">
          <h1 className="Header">Welcome to the Student Portal</h1>
          <p className="pointfont">
            This portal provides you with an overview of your grades, allows you
            to report missing grades, and enables communication with your
            instructors or academic administration.This is designed to assist
            students in tracking and reporting grades that are not recorded in
            their academic profiles.
          </p>
          <Link to="/login">
            {" "}
            <button type="button">Login</button>
          </Link>
        </div>

        <div className="image">
          <img src={pic} alt=""  />
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Home;
