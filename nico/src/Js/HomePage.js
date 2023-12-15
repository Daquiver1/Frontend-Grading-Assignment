// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "../Css/HomePage.css";
import SideNavBar from "./SideNavBar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="content">
      <div className="upper">
        <SideNavBar />
        <div className="home">
          <div className="home-container">
            <h1>Welcome to the Missing Grade Reporting System!</h1>
            <main className="content">
              <p className="intro-text">
                Empowering students to take control of their academic records.
              </p>
              <p className="main-text">
                Are you tired of wondering about missing grades that haven't
                made it to your academic profile? Our system is here to provide
                a solution, offering a user-friendly interface that allows you
                to track and report missing grades effortlessly.
              </p>
            </main>
          </div>
        </div>
      </div>

      <div className="lower">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
