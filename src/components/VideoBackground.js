// VideoBackground.js

import React from "react";
import "./VideoBackground.css"; // Import your CSS file for styling

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="./1068120509-preview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
