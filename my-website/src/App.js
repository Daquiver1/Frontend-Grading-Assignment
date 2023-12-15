// src/App.js
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LandingPage from './component/LandingPage';
import LoginPage from './component/LoginPage';
import DashBoard from './component/DashBoard';
import GradeReportPage from './component/GradeReportPage';
import MissingGradeFormPage from './component/MissingGradeFormPage';
import InstructorContactPage from './component/InstructorContactPage';
import HelpSupportPage from './component/HelpSupportPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dash-board" element={<DashBoard />} />
                <Route path="/grade-report" element={<GradeReportPage />} />
                <Route path="/missing-grade-form" element={<MissingGradeFormPage />} />
                <Route path="/instructor-contact" element={<InstructorContactPage />} />
                <Route path="/help-support" element={<HelpSupportPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
