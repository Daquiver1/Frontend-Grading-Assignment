import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNar from './components/SideNav';
import TopNav from './components/TopNar';
import './css/sb-admin-2.min.css';
import './App.css';
import Footer from './components/Footer';
import { StudentProvider } from './StudentContext';

// pages
import Grades from './pages/Grades';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import Home from './pages/Home';
import MissingGradeReport from './pages/MissingGradeReport';
import InstructorContact from './pages/InstructorContact';
import HelpSupport from './pages/HelpSupport';

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div id="wrapper">
          {/* Sidebar */}
          <SideNar />
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <main id="content">
                  <TopNav />
                  {/* Begin Page Content */}
                  <div className="container-fluid">
                      <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/login" Component={Login} />
                        <Route path="/grades" Component={Grades} />
                        <Route path="/dashboard" Component={Dashboard} />
                        <Route path="/missing-grade-report" Component={MissingGradeReport} />
                        <Route path="/instructor-contact" Component={InstructorContact} />
                        <Route path="/help" Component={HelpSupport} />
                      </Routes>
                  </div>
                </main>
              <Footer />
          </div>
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
