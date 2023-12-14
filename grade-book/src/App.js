import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./Components/HomePage";
import LandPage from "./Components/Landpage";
import LoginPage from "./Components/LoginPage";
import DashboardPage from "./Components/DashboardPage";
import MissingGradePage from "./Components/MissingGradePage";
import GradeReportPage from "./Components/GradeReportPage";
import ContactPage from "./Components/ContactPage";
import HelpAndSupportPage from "./Components/HelpAndSupportPage";

const router =createBrowserRouter([
  {
    path: "/"
    
  }
])


function App() {
  return (
  <LandPage/>
  );
}

export default App;
