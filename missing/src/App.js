import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Login from "./Pages/Login";
import Navbar from "./Components/navbar";
function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<LandingPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Navbar" element={<Navbar />} />
          
          </Routes>

        </BrowserRouter>
      </div>
  );
};

export default App;
