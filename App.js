// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import dashboard from "./Pages/dashboard";
import gradereport from  "./Pages/gradereport";
import helpandsupport from "./Pages/helpandsupport";
import login from "./Pages/login";
import missingGradeForm from "./Pages/missingGradeForm";
import instructorcontact from "./Pages/instructorcontact";
import Body from './body/body';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
    
  );
}

export default App;
