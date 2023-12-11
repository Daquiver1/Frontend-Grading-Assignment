import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import HeroSection from "./Components/HeroSection";
import LandingPage from "./Pages/Landing";

export function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<HeroSection />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
