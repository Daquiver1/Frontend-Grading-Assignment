import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar'
import Home from './Component/Home';
import LogInPage from './Component/LogInPage';
import DashBoard from './Component/DashBoard';
import GradeReport from './Component/GradeReport';
import GradeForms from './Component/GradeForms';
import Contacts from './Component/Contacts';
import HelpPage from './Component/HelpPage';

function App() {
  return (
    <Router>
      <div className='mba'>      
        <div>
        <Sidebar />
        </div>
        
        <div className='kss'>
        <Routes>
          
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<LogInPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/gradereport" element={<GradeReport />} />
          <Route path="/gradeform" element={<GradeForms />} />
          <Route path="/contactus" element={<Contacts />} />
          <Route path="/helpsupport" element={<HelpPage />} />
     
     </Routes>
        
      </div>
      </div>

    </Router>
  );
}

export default App;
