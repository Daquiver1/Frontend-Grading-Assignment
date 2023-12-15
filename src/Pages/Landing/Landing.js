import React from "react";
import {FiArrowRight} from "react-icons/fi";

const Landing = () => {
  return (
     <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src="BannerBackground" alt=""/>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Result Tracker
          </h1>
          <p className="primary-text">
            Track your semster results HERE!!!!!
          </p>
          <button className="second-button">
            Check Here <FiArrowRight />
          </button>

        </div>

      </div>
     </div>
  );
};

export default Landing;
