import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MissingGrade from './MissingGrade';
import GradeReport from './GradeReport';
import Contacts from './Contacts';
import SignUp from './SignUp';
import Help from './Help';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/missinggrade" component={MissingGrade} />
        <Route path="/gradereport" component={GradeReport} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/signup" component={SignUp} />
        <Route path="/help" component={Help} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
