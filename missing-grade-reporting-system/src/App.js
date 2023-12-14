// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import MissingGradeForm from './pages/MissingGradeFormPage';
import Dashboard from './pages/DashboardPage';
import Landing from './pages/LandingPage';
import Login from './pages/LoginPage';
import GradeReport from './pages/GradeReportPage';
import InstructorContact from './pages/InstructorContactPage';
import HelpAndSupport from './pages/HelpAndSupportPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" exact element={<Landing/>} />
            <Route path="/Login" exact element={<Login/>} />
            <Route path="/Dashboard" exact element={<Dashboard/>} />
            <Route path="/GradeReport" exact element={<GradeReport/>} />
            <Route path="/MissingGradeForm" exact element={<MissingGradeForm/>} />
            <Route path="/InstructorContact" exact element={<InstructorContact/>} />
            <Route path="/HelpAndSupport" exact element={<HelpAndSupport/>} />
          </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
