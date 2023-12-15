import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import LandingPage from './component/LandingPage'
import DashboardPage from './component/DashboardPage'
import GradeReportPage from './component/GradeReportPage'
import Login from './component/Login'
import InstructorContact from './component/InstructorContact'
import HelpSupport from './component/HelpSupport'
import MissingGradeReport from './component/MissingGradeReport'

function App(){
    return(
      <>
      <Header/>
      <LandingPage />
      <DashboardPage />
      <GradeReportPage />
      <Login />
      <InstructorContact />
      <HelpSupport />
      <MissingGradeReport />
      <Footer />
      </>
    );
}

export default App