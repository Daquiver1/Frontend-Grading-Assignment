import React from 'react';
import{ BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingpage.jsx';
import Sidebar from './components/sidebar.jsx';
import LoginPage from './pages/loginpage.jsx';
import Dashboard from './pages/dashboard.jsx';
import GradeReport from './pages/gradereport.jsx';
import MissingGrade from './pages/missinggrade.jsx';
import Contact from './pages/contact.jsx';
import Help from './pages/help.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>    
      <Route path="/"element={<LandingPage/>}/>
      <Route path="/loginpage"element={<LoginPage/>}/>
      <Route path="/dashboard"element={<Dashboard/>}/>
      <Route path="/gradereport"element={<GradeReport/>}/>
     <Route path="/missinggrade"element={<MissingGrade/>}/>        
     <Route path="/help"element={<Help/>}/>
     <Route path="/contact"element={<Contact/>}/>
     <Route path="/help"element={<Help/>}/>
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;