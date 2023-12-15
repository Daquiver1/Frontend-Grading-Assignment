import React from 'react';
import GradeList from './Pages/GradeReport';
import MissingGradeForm from './Pages/MissingGradeForm';
import InstructorContact from './Pages/InstructorContact';
import Navbar from './components/Navbar';
import {  Route, Routes } from 'react-router-dom';
import HelpSupportPage from './Pages/HelpSupportPage';
import Login from './Pages/LoginPage';
import Home from './Pages/Home';
import './components/style/footer.css'
import './App.css' 

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Routes>
          <Route path="/grade-report" element={<GradeList />} />
          <Route path="/missing-grade-form" element={<MissingGradeForm />} />
          <Route path="/instructor-contact" element={<InstructorContact />} />
          <Route path="/help-support-page" element={<HelpSupportPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Home />} />
        </Routes>
      
        <footer>
            <div className="footer">
            <p>© CopyRights</p>
            </div>
        </footer>
    </div>
  );
};

export default App;
