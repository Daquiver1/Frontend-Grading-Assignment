import React from "react";
import fab29 from "../assets/fab29 (2).mp4";
import "./VideoBackground.css";
const VideoContact = () => {
  return (
    <div>
      <div className="video-background">
        <video src={fab29} autoPlay loop muted />
      </div>
    </div>
  );
};

export default VideoContact;
