import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Error404Page from './pages/Error404Page';
// import GradeReport from './pages/GradeReport';
// import MissingGradeForm from './pages/MissingGradeForm';
// import InstructorContact from './pages/InstructorContact';
// import HelpAndSupport from './pages/HelpAndSupport';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route path="/grade-report" component={GradeReport} />
          <Route path="/missing-grade-form" component={MissingGradeForm} />
          <Route path="/instructor-contact" component={InstructorContact} />
          <Route path="/help-and-support" component={HelpAndSupport} /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="*" component={Error404Page}/>

        </Switch>
      </div>
    </Router>
  );
};

export default App;
