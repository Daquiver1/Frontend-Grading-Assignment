import React from "react";
import fab27 from "../assets/fab27.mp4";
import "./VideoBackground.css";
const VideoHelp = () => {
  return (
    <div className="video-background">
      <video src={fab27} autoPlay loop muted />
    </div>
  );
};

export default VideoHelp;
