// import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Missing Grade Report System</h1>
        <p>
        Introducing our grading system website: Your one-stop solution for efficient academic tracking.
         With secure login, easy grade viewing, and streamlined reporting,
          managing your grades has never been easier.
        </p>
        {/* <a href="/tutors" className="btn hero-btn">
          our tutors
        </a> */}

        <a
          href="/tutors"
          className="bg-white p-3 text-black rounded-lg font-semibold mt-10"
        >
          Dashboard
        </a>
      </div>
    </section>
  );
}

export default Hero;
