import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SideNar from './components/SideNav';
import TopNav from './components/TopNar';
import './css/sb-admin-2.min.css';
import './App.css';

function App() {

  // 7-page website that acts as the front for a "Missing Grade Reporting System". This system is designed to help students track and report grades that are not recorded in their academic profiles. The goal is to create an interactive, user-friendly interface that enables students to view their grades, report missing grades, and communicate with their instructors or academic administration.



  return (
    <BrowserRouter>
      <div id="wrapper">
        {/* Sidebar */}
        <SideNar />
        {/* Content Wrapper */}
        <div id="content-wrapper" class="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                <TopNav />
                {/* Begin Page Content */}
                <div class="container-fluid">
                    <Routes>
                      <Route path="/" Component={Home} />
                      <Route path="/login" Component={Login} />
                    </Routes>
                  
                </div>
              </div>
            </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
