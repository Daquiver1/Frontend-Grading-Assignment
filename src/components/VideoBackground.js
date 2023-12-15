// VideoBackground.js

import React from "react";
import fab24 from "../assets/fab24.mp4";

import "./VideoBackground.css"; // Import your CSS file for styling

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video src={fab24} autoPlay loop muted />
    </div>
  );
};

export default VideoBackground;
