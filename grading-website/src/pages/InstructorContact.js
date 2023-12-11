import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LeftSidebar from "../components/LeftSidebar";

function InstructorContact() {
  const backgroundImage = (
    <img src={process.env.PUBLIC_URL + "./images/dcs-banner.jpg"} />
  );
  const pageContent = (
    <>
      <div className="page-content-container">
        <div className="page-header-box">
          <h2>Meet Your Instructors</h2>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage={backgroundImage}
        pageContent={pageContent}
      />
      <LeftSidebar />
    </>
  );
}

export default InstructorContact;
