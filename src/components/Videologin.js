import React from "react";
import fab26 from "../assets/fab26.mp4";
import "./VideoBackground.css";
const Videologin = () => {
  return (
    <div className="video-background">
      <video src={fab26} autoPlay loop muted />
    </div>
  );
};

export default Videologin;
