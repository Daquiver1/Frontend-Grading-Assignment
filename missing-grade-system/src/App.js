import React from 'react';
import './App.css';
import Landing from './components/pages/Landing_page';
import Dashboard from './components/pages/Dashboard_page';
import Login from './components/pages/Login_page';
import Navbar from './components/inc/Navbar';
import GradeReport from './components/pages/Grade_report_page';
import MissingGrade from './components/pages/Missing_Grade_page';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstructorContact from './components/pages/Instructor_Contact_page';
import Help from './components/pages/Help_page';
import Footer from './components/inc/footer';

function App() {
  return (
    <Router>

    <div>

    <Navbar/>
      <Routes>

        <Route path= "/Landing" element={<Landing/>}/>

        <Route path= "/Dashboard" element= {<Dashboard/>}/>

        <Route path= "/Login" element= {<Login/>}/>

        <Route path= "/GradeReport" element= {<GradeReport/>}/>

        <Route path= "/MissingGrade" element= {<MissingGrade/>}/>

        <Route path = "/InstructorContact" element= {<InstructorContact/>}/>
     
        <Route path = "/Help" element= {<Help/>}/>


        
      </Routes>

      <Footer />

      

     
      
      
      
    </div>
    </Router>
    
    

  );
}

export default App;
