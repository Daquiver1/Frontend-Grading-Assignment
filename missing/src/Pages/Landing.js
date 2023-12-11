import React from "react";
import Navbar from "../Components/navbar"
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import Steps from "../Components/Steps";

const LandingPage = () => {
    return (
        <div className="overflow-hidden">
       <Navbar />
       <HeroSection />
       <Steps />
       <Footer />
       
       </div>
    );
};

export default LandingPage


