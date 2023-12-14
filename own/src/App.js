import { Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Homepage from './pages/Homepage'
import Footer from './Components/Footer'
import Loginpage from './pages/Loginpage'
import Reportpage from './pages/Reportpage'
import Missinggradepage from './pages/Missinggradepage'
import HelpandSuportpage from "./pages/HelpandSuportpage";
import Instructorpage from "./pages/Instructorpage";
import Dashboardpage from "./pages/Dashboardpage";

function App() {
  return (
    <div>
      
<Navigation />

<Routes>
      <Route path="/" element={< Homepage />} />
      <Route path="/Login" element={< Loginpage />} />
      <Route path="/Report" element={< Reportpage />} /> 
      <Route path="/missinggrade" element={< Missinggradepage />} />
      <Route path="/helpandsupport" element={< HelpandSuportpage />} />
      <Route path="/instructor" element={< Instructorpage />} />
      <Route path="/dashboard" element={< Dashboardpage />} />
      </Routes>

<Footer />

    </div>
   
  );
} 

export default App;
