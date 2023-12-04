import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.jpg";
import BannerImage from "../Assets/home-banner-image.jpg";
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container"></div>
      <div className="home-banner-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="home-text-section" >
        <h1 className="primary-heading">
          Find Your Missing grades Here
        </h1>
        <p className="primary-text">
        Discover your missing grades effortlessly Here. Swiftly locate any elusive grades and gain instant access to the information you need.
        </p>
        <button className="secondary-button">
          Find Grade Now <FiArrowRight />
        </button>

    

      </div>
      <div className="home-image-container">
        <img src={BannerImage} alt="" />
      </div>      
    </div>
  );
};

export default Home;
