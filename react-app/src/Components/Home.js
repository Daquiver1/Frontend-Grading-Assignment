import React from "react";
import BannerImage from "../Assets/home-banner-background.jpg";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
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
            elusive grades and gain instant access to the information you need.
          </p>
          <button className="secondary-button">
            Login To Find <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
