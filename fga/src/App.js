import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Dashboard from "./Pages/DashBoard";
import Grades from "./Pages/Grades";
import GradeReportForm from "./Pages/MissingGradeReport";
import HelpAndSupportPage from "./Pages/HelpAndSupportPage";
import InstructorContactPage from "./Pages/InstructorContactPage";



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Landing Page";
        metaDescription = "Laniding Page";
        break;
      case "/login":
        title = "Login";
        metaDescription = "Login page";
        break;
      default:
        title = "Landing Page";
        metaDescription = "Laniding Page";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/Pages/Login" element={<Login />} /> 
      <Route path="/Pages/DashBoard" element={<Dashboard />}/>
      <Route path="/Pages/Grades" element={<Grades />} />
      <Route path="/Pages/InstructorContactPage" element={<InstructorContactPage />} />
      <Route path="/Pages/HelpAndSupportPage"  element={<HelpAndSupportPage />} /> 
      <Route path="/Pages/MissingGradeReport" element={<GradeReportForm />}/>
      <Route path="/Pages/GradeReportForm" element={<GradeReportForm/>} /> 

    </Routes>  
   );
  }
export default App;

