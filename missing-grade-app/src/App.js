import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import LandingPage from './components/Pages/LandingPage'
import bg from './components/images/landing.jpg';
import LoginPage from './components/Pages/LoginPage';
import Footer from './components/Footer';
import Dashboard from './components/Pages/DashboardPage'; 
import InstructorContactPage from './components/Pages/InstructorContactPage';
import GradeReportPage from './components/Pages/GradeReportPage';
import MissingGrade from './components/Pages/MissingGrade';
import HelpAndSupportPage from './components/Pages/Help&SupportPage';

function App() {
  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Router>
      <main className="h-screen w-screen" style={styles}>
        <Navbar />

      
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />}/> 
          <Route path="/grade-report" element={<GradeReportPage />} />
            <Route path="/missing-grade" element={<MissingGrade />} />
          <Route path="/instructor-contact" element={<InstructorContactPage />} />
          <Route path="/help-support" element={<HelpAndSupportPage/>} />
        </Routes>
        <Footer /> 
      </main>          
      
    </Router>
  );
}

export default App;
