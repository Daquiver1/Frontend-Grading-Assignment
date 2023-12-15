import React from 'react';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';

//import LandingPage from './components/LandingPage';
//import LoginPage from './components/LoginPage';
//import DashboardPage from '../src/components/DashboardPage';
//import GradeReportPage from './components/GradeReportPage';
//import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
//import HelpAndSupportPage from './components/HelpAndSupportPage';


function App() {
  return (
    <InstructorContactPage/>
    // <Router>
    //   <div>
    //     {/* Your navigation or header can go here if needed */}
    //     <Switch>
    //       {/* Define your routes inside the Switch component */}
    //       <Route path="/" exact component={DashboardPage} />
    //       {/* Add more routes as needed */}
    //     </Switch>
    //     {/* Your footer or other elements can go here if needed */}
    //   </div>
    // </Router>
  );
}

export default App;
