// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
import HelpAndSupportPage from './components/HelpAndSupportPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header1 />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header1 />
              <LoginPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Header2 />
              <Sidebar />
              <DashboardPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/grade-report"
          element={
            <>
              <Header2 />
              <Sidebar />
              <GradeReportPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/missing-grade-form"
          element={
            <>
              <Header2 />
              <Sidebar />
              <MissingGradeFormPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/instructor-contact"
          element={
            <>
              <Header2 />
              <Sidebar />
              <InstructorContactPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/help-and-support"
          element={
            <>
              <Header2 />
              <Sidebar />
              <HelpAndSupportPage />
              <Footer />
            </>
          }
        />
        {/* Add a 404 page if needed */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
