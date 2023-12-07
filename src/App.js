import React, { useState, useContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SideNar from './components/SideNav';
import TopNav from './components/TopNar';
import './css/sb-admin-2.min.css';
import './App.css';
import Footer from './components/Footer';
import { StudentProvider } from './StudentContext';

function App() {
  return (
    <StudentProvider>
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
              <Footer />
          </div>
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
