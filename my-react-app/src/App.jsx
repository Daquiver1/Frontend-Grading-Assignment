import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update imports
import './index.css';
import Landing from './Landing.jsx';
import Login from './Login.jsx'; // Assuming Login.jsx exists
import Dashboard from './Dashboard';
import HelpAndSupport from './HelpAndSupport.jsx'
import GradeReport from './GradeReport.jsx'
import InstructorContactPage from './InstructorContactPage.jsx'
import MissingGradeForm from './MissingGradeForm.jsx';
function App() {
    return (
        
        <Router>
            <Routes>
            <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                <Route path="/HelpAndSupport" element={<HelpAndSupport/>} />
                <Route path="/GradeReport" element={<GradeReport/>} />
                <Route path="/InstructorContactPage" element={<InstructorContactPage/>} />
                <Route path="/MissingGradeForm" element={<MissingGradeForm/>} />
            </Routes>
        </Router>
    );
}

export default App;
