import React from 'react';
import './main.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Main from './components/appmain';
import Login from './components/login';
import DashboardPage from './components/dashboardpage'; 
import GradeReportPage from './components/GradeReport';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} /> 
        <Route path="/grade-report" element={<GradeReportPage />} />
      </Routes>
      <Footer />
    </Router>
    </BrowserRouter>
  );
}

export default App;
