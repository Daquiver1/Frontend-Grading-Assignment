import React from "react";
import "./Help2.css";
import gtns_image from "../Assets/gtns.png";
import am_image from "../Assets/am.png";
import rp_image from "../Assets/Rp.png";

const Help2 = () => {
  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="image-container">
          <img src={gtns_image} alt="" />
        </div>
        <div className="text-container">
          <p>Get help to set up your accounts in some fe basic steps.</p>
        </div>
      </div>
      <div className="inner-container">
        <div className="image-container">
          <img src={am_image} alt="" />
        </div>
        <div className="text-container">
          <p>
            Viewing grades, making reports, accessing details and linking to
            MIS.
          </p>
        </div>
      </div>
      <div className="inner-container">
        <div className="image-container">
          <img src={rp_image} alt="" />
        </div>
        <div className="text-container">
          <p>
            Let us know of any challenges you encouter in using this system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help2;
