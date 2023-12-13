import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';

import LoginPage from '../src/components/LoginPage';





function App() {
  return (
    <Router>
      <div>
        {/* Your navigation or header can go here if needed */}
        <Switch>
          {/* Define your routes inside the Switch component */}
          <Route path="/" exact component={LoginPage} />
          {/* Add more routes as needed */}
        </Switch>
        {/* Your footer or other elements can go here if needed */}
      </div>
    </Router>
  );
}

export default App;
