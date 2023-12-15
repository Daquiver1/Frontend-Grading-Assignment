import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage'; 
import bg from './images/landing.jpg';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import Dashboard from './components/DashboardPage'; 
import InstructorContactPage from './components/InstructorContactPage';
import GradeReportPage from './components/GradeReportPage';

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
          <Route path="/instructor-contact" element={<InstructorContactPage />} />
        </Routes>
        <Footer /> 
      </main>          
      
    </Router>
  );
}

export default App;
