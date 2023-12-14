import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Pages/home';
import HelpAndSupport from './Pages/helpAndSupport';
import ContactUs from './Pages/contactUs';
import Dashboard from './Pages/dashboard';
import LoginPage from './Pages/loginPage';
import GradeReport from './Pages/gradeReport';
import NoPage from './Pages/NoPage';
import MissingGradeform from './Pages/missingGradeForm';
import QuickContactUs from './Pages/QuickContactUs'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/GradeReport' element={<GradeReport/>}/>
          <Route path='/HelpAndSupport' element={<HelpAndSupport/>}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path='/MissingGrade' element={<MissingGradeform/>}/>
          <Route path='/QuickContactUs' element={<QuickContactUs/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
