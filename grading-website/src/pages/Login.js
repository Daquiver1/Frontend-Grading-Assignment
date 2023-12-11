import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

function Login() {
  const backgroundImage = (
    <>
      <img src={process.env.PUBLIC_URL + "./images/login-image.jpg"} />
    </>
  );

  const pageContent = (
    <>
      <div className="student-login-details">
        <div className="student-id-container">
          <input type="text" placeholder="Student ID " required="required" />
          <div>Please fill out this field</div>
        </div>
        <div className="student-pin-container">
          <input type="text" placeholder="Pin" required="required" />
          <div>Please fill out this field</div>
        </div>
      </div>
      <div className="submit-button-container">
        <button type="submit">Login</button>
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
    </>
  );
}

export default Login;
