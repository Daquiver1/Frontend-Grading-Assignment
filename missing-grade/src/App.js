import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import LandingPage from './Pages/landingPage';

import Login from './Pages/login';

import Dashboard from './Pages/dashboard';

import GradeForms from './Pages/gradeforms';

import GradeReport from './Pages/gradereport';

import Instructors from './Pages/instructors';

import SignOut from './Pages/signout';

import Help from './Pages/help';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/gradeforms" element={<GradeForms />} />
        <Route path="/dashboard/gradereport" element={<GradeReport />} />
        <Route path="/dashboard/instructors" element={<Instructors />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/help" element={<Help />} />
      </Routes>

    </Router>
  );
}

export default App;
