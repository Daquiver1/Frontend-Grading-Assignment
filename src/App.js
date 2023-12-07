import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import OverviewPage from './component/landingpage';
import LoginPage from './component/loginpage';
import ContactPage from './component/instructorcontact';
import FAQPage from './component/helpandsupport';
import Footer from './component/footerooter';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="Overview">
          <div className="navbar">
            <div className="logo">WebName</div>
            <div className="navlinks">
              <Link to="/landingpage">Overview</Link>
              <Link to="/loginpage">Login</Link>
              <Link to="/instructorcontact">Contact</Link>
              <Link to="/helpandsupport">FAQ</Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/ladingpage" exact component={OverviewPage} />
          <Route path="/loginpage" component={LoginPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/faq" component={FAQPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
