import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import GradeReportPage from '../pages/GradeReportPage';
import MissingGradeFormPage from '../pages/MissingGradeFormPage';
import InstructorContactPage from '../pages/InstructorContactPage';
import HelpAndSupportPage from '../pages/HelpAndSupportPage';

function Navbar() {
  return (
    <header className="App-header bg-blue-600 p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="text-white">
              Landing Page
            </Link>
          </li>
          <li>
            <Link to="/LoginPage" className="text-white">
              Login
            </Link>
          </li>
          <li>
            <Link to="/DashboardPage" className="text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/GradeReportPage" className="text-white">
              Grade Report Page
            </Link>
          </li>
          <li>
            <Link to="/MissingGradeFormPage" className="text-white">
              Missing Grade Form Page
            </Link>
          </li>
          <li>
            <Link to="/InstructorContactPage" className="text-white">
              Instructor Contact Page
            </Link>
          </li>
          <li>
            <Link to="/HelpAndSupportPage" className="text-white">
              Help and Support Page
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/DashboardPage" element={<DashboardPage />} />
          <Route path="/GradeReportPage" element={<GradeReportPage />} />
          <Route path="/MissingGradeFormPage" element={<MissingGradeFormPage />} />
          <Route path="/InstructorContactPage" element={<InstructorContactPage />} />
          <Route path="/HelpAndSupportPage" element={<HelpAndSupportPage />} />
        </Routes>
      </nav>
    </header>
  );
}

export default Navbar;
