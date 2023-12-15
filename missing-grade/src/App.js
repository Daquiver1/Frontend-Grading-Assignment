import React from "react";
import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Report from './components/pages/Report' ;
import Form from './components/pages/Form';
import Contact from './components/pages/Contact';
import Help from './components/pages/Help';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div>
     <Router>
     <Navbar/>
     <Routes>
        <Route path="/exact"  element={<Landing/>} />
      </Routes>
      <Routes>
        <Route path="/login"  element={<Login/>} />
      </Routes>
      <Routes>
        <Route path="/dashboard"  element={<Dashboard/>} />
      </Routes>
      <Routes>
        <Route path="/report"  element={<Report/>} />
      </Routes>
      <Routes>
        <Route path="/form"  element={<Form/>} />
      </Routes>
      <Routes>
        <Route path="/contact"  element={<Contact/>} />
      </Routes>
      <Routes>
        <Route path="/contact"  element={<Help/>} />
      </Routes>
    
      <Footer/>
     
     </Router>
      
      
     

      
   
     
    </div>
  );
}

export default App;
