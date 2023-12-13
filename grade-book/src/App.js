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
    <HelpAndSupportPage/>
  );
}

export default App;
