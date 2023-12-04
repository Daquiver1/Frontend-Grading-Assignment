import NavBar from "./Component/includes/Navigation bar";
import HomePage from "./Component/pages/Home";
import LoginPage from "./Component/pages/Login";
import Dashboard from "./Component/pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// const title = "Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {" "}
          <NavBar />
          <Switch>
            <Route path="/HomePage">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
