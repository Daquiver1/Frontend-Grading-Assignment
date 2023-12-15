import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Overview from './Components/Homepage/Overview';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import GradeForm from './Components/GradeForm';
import GradeReport from './Components/GradeReport';
import ContactUs from './Components/ContactUs';
import HelpSupport from './Components/HelpSupport';

function App() {

 
  return (
    <Router>
      <div>
     
        <Routes>
       
          <Route path="/" element={<Overview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gradereport" element={<GradeReport />} />
          <Route path="/gradeform" element={<GradeForm />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/helpsupport" element={<HelpSupport />} />


        
        

        </Routes>
      </div>
    </Router>
  );
}

export default App;
