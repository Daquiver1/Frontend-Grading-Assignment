import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Report from './components/Pages/Grade report/Report';
import Faqs from './components/Pages/Help and support/Faqs';
import Home from './components/Pages/Home/Home';
import Instructor from './components/Pages/Instructor Contact/Instructor';
import MissingGrade from './components/Pages/Missing grade form/MissingGrade';
import Login from './components/Pages/Login/Login';
import "./components/Pages/Dashboard/globalStyles.css"

import { Header } from './components/Header/Header';
import { Footer } from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DashboardPage" element={<Dashboard />} />
          <Route path="/InstructorContactPage" element={<Instructor />} />
          <Route path="/GradeReportPage" element={<Report />} />
          <Route path="/MissingGradeFormPage" element={<MissingGrade />} />
          <Route path="/HelpAndSupportPage" element={<Faqs />} />
          <Route path="/LoginPage" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
