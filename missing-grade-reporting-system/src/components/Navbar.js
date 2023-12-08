import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import image1 from '../images/UG-logo.png';


import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import GradeReportPage from '../pages/GradeReportPage';
import MissingGradeFormPage from '../pages/MissingGradeFormPage';
import InstructorContactPage from '../pages/InstructorContactPage';
import HelpAndSupportPage from '../pages/HelpAndSupportPage';

function Navbar() {
  return (
    <nav className={"bg-blue-900 text-white w-64 p-6 ${open} min-h-screen relative"}>
      <div class="flex items-center">
        <img src={image1} alt="University of Ghana Logo" class="p-0 m- w-24 h-auto inline-block"/>
        <h1 className="text-2xl font-bold text-gray-500 leading-tight">
            UG Grade Report Systems
        </h1>
      </div>
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
  );
}

export default Navbar;
