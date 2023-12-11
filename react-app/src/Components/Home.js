import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../Assets/home-banner-background.jpg";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
    <Navbar />
      <div className="home-container">
        <div
          className="home-banner-container"
          style={{
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div className="home-text-section">
            <h1 className="primary-heading">Find Your Missing grades Here</h1>
            <p className="primary-text">
              Discover your missing grades effortlessly Here. Swiftly locate any
              elusive grades and gain instant access to the information you
              need.
            </p>
            <Link to="/login">
              <button className="secondary-button">
                Login To Find <FiArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
