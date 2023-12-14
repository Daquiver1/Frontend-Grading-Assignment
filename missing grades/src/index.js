import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login'; // Import the default export
import Instructors from './instructorContact';
import Grade from './gradeReport';
import MissingGrades from './missingGradeForm';
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';
import HelpAndSupport from './HelpAndSupport';
import LandingPage from './LandingPage';
import GradeReport from './gradeReport';
import InstructorContact from './instructorContact';
import MissingGradeForm from './missingGradeForm';

function MyRouter() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/instructorContact' element={<InstructorContact />} />
          <Route path='/faq' element={<HelpAndSupport />} />
          <Route path='/gradeReport' element={<GradeReport />} />
          <Route path='/missingGradeForm' element={<MissingGradeForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/landingpage' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MyRouter />);

reportWebVitals();
