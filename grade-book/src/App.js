import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import LandPage from "./Components/Landpage";
import LoginPage from "./Components/LoginPage";
import Footer from "./Components/Footer";
import DashboardPage from "./Components/DashboardPage";
import MissingGradePage from "./Components/MissingGradePage";
import GradeReportPage from "./Components/GradeReportPage";
import ContactPage from "./Components/ContactPage";
import HelpAndSupportPage from "./Components/HelpAndSupportPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/Dashboard" component={DashboardPage} />
        <Route path="/GradeReport" component={GradeReportPage} />
        <Route path="/Missinggrade" component={MissingGradePage} />
        <Route path="/contact" component={ContactPage} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
