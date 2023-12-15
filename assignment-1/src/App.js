import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import MissingGradeForm from './MissingGradeForm';
import Dashboard from './Dashboard';
import GradeReport from './GradeReport'; // Import GradeReport component
import HelpSupportPage from './HelpSupportPage'; // Import HelpSupport component
import Homepage from './Homepage'; // Import Homepage component
import InstructorsContactPage from './InstructorsContactPage'; // Import InstructorContact component
import LoginForm from './LoginForm'; // Import Login component

function App() {
  return (
    <BrowserRouter>
   <div>
   <Router>
      <Route path="/missing-grade" component={MissingGradeForm} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/grade-report" component={GradeReport} />
      <Route path="/helpsupportpage" component={HelpSupportPage} />
      <Route path="/homepage" component={Homepage} />
      <Route path="/instructorsContactPage" component={InstructorsContactPage} />
      <Route path="/loginForm" component={LoginForm} />
    </Router>
    </div>
    </BrowserRouter>
  );

}

export default App;
