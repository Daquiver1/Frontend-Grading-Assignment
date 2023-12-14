import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Error404Page from './pages/Error404Page';
import HelpAndSupport from './pages/HelpAndSupport';
import AdminLayout from './layout/Admin';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route path="/help-and-support" component={HelpAndSupport} /> 
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />

          <Route exact path="*" component={Error404Page}/>

        </Switch>
      </div>
    </Router>
  );
};

export default App;
