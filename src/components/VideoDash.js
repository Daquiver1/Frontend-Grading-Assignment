import React from "react";
import fab28 from "../assets/fab28.mp4";
import "./VideoBackground.css";
const VideoDash = () => {
  return (
    <div className="video-background">
      <video src={fab28} autoPlay loop muted />
    </div>
  );
};

export default VideoDash;
