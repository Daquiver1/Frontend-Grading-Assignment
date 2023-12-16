import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import ReportGradePage from './pages/ReportGradePage';
import InstructorContactPage from './pages/InstructorContact';
import HelpAndSupport from './pages/HelpAndSupport';
function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
        <div className='mt-100px'>       
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path='/grade-report' element={<ReportGradePage />} />
            <Route path="/instructor-contact" element={<InstructorContactPage />} />
            <Route path="/helpandsupport" element={<HelpAndSupport />} />
            </Routes>
        </div>
 
    </BrowserRouter>
    </div>

  );
}

export default App;
