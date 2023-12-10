import React from "react";
import fab23 from "../assets/fab23.mp4";
import "./VideoBackground.css";
const VideoMissing = () => {
  return (
    <div className="video-background">
      <video src={fab23} autoPlay loop muted />
    </div>
  );
};

export default VideoMissing;
