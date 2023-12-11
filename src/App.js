import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import GradeReport from './pages/GradeReport';
import MissingGradeReport from './pages/MissingGradeReport';
import InstructorContact from './pages/InstructorContact';
import HelpandSupport from './pages/HelpandSupport';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/" exact element={<Landing />} />  {/* Update the import path */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grade-report" element={<GradeReport />} />
          <Route path="/missing-grade" element={<MissingGradeReport />} />
          <Route path="/instructor-contact" element={<InstructorContact />} />
          <Route path="/help" element={<HelpandSupport />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;