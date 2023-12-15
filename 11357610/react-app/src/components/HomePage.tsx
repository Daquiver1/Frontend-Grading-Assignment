import React from "react";
import "./HomePage.css";

const HeaderComponent = () => {
  return (
    <>
      <header className="header">
        <div className="dept-logo">
          <a href="index.html">
            <img
              src="./public/img/CS_logo.png"
              className="logo"
              alt="Computer Science Department"
            />
          </a>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="index.html">Dashboard</a>
            </li>
            <li>
              <a href="about.html">Grade Report</a>
            </li>
            <li>
              <a href="gallery.html" target="_blank">
                Missing Grade Report
              </a>
            </li>
            <li>
              <a href="contact.html">Contact Instructor</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="intro-hm">
        <div className="intro-txt">
          <h1>Welcome To The Missing Grade Reporting System</h1>
        </div>
        <a href="login.html" className="learn-more">
          Login
        </a>
      </section>
    </>
  );
};

export default HeaderComponent;
