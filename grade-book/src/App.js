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
    path: "/",
    element: <LandPage/> ,  
  },
  {
    path: "/home",
    element: <HomePage/>   ,
  },
  {
    path: "/dashboard",
    element: <DashboardPage/> ,  
  },
  {
    path: "/login",
    element: <LoginPage/> ,  
  },
  {
    path: "/helpandsupport",
    element: <HelpAndSupportPage/> ,  
  },
  {
    path: "/contact",
    element: <ContactPage/> ,  
  },
  {
    path: "/missinggrade",
    element: <MissingGradePage/>,   
  },
  {
    path: "/gradereport",
    element: <GradeReportPage/> ,  
  },
]);


function App() {
  return (
  <RouterProvider router={router} />
  );
}

export default App;
