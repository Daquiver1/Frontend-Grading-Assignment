import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login'; // Import the default export
import ContactUsPage from './ContactUsPage';
import GradePage from './GradePage';
import MissingGrades from './MissingGradeForm';
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';
import HelpAndSupport from './HelpAndSupport';
import LandingPage from './LandingPage';



function MyRouter() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/faq' element={<HelpAndSupport />} />
          <Route path='/grades' element={<GradePage />} />
          <Route path='/missing-grade-form' element={<MissingGrades />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/landingpage' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MyRouter />);

reportWebVitals();
