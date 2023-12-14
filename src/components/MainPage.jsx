import React from 'react';
import Landing from "./Pages/LandingPage";
import Header from "./header";
import Footer from "./footer";
import DashBoard from "./Pages/DashboardPage";
import Instructor from "./Pages/InstructorInfo";
import { Route, Routes, Navigate } from 'react-router-dom';
import Support from './Pages/HelpSupportPage';
import Report from './Pages/ReportMissingGradePage';
import Grade from './Pages/GradeReportPage';


function Main(){
  return(
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/instructor' element={<Instructor />} />
        <Route path='/dashboard' element={<DashBoard />} /> 
        <Route path='/help-support' element={<Support />} /> 
        <Route path='/report' element={<Report />} /> 
        <Route path='/grades' element={<Grade />} /> 
      </Routes>
      <Footer/>
    </>
    
  );
}

export default Main

