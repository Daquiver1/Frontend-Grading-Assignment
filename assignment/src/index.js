import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { reportWebVitals } from './reportWebVitals';
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Login from './Pages/Login';
import LandingPage from './Pages/Landing page';
import HelpSupportPage from './Pages/HelpSupportPage';
import DashboardPage from './Pages/Dashboard';
import Footer from './Components/Footer';
import GradeReportPage from './Pages/GradeReport';
import MissingGradeFormPage from './Pages/MissingGradeReport';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Contact' element={<HelpSupportPage/>} />
        <Route path='/Dashboard' element={<DashboardPage/>} />
        <Route path="/GradeReport" element={<GradeReportPage/>} />
        <Route path='/MissingGradeReport' element={<MissingGradeFormPage/>}/>
        <Route path='/HelpSupportPage' element = {<HelpSupportPage/>} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
