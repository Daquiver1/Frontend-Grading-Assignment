
import Home from "./component/home";
import Login from "./component/login";
import Dashboard from "./component/dashboard";
import HelpAndSupport from "./component/HelpAndSupport";
import MissingGradeForm from "./component/missing_grade_form";
import InstructorContact from "./component/instructor_contact";
import GradeReport from "./component/grade_report";

import "./component/login.css";
import "./component/style.css"
import Navbar from "./component/Navbar";







 function App() {
  let component
  switch  (window.location.pathname) {
    
     case "/home":
      component = <Home />
      break;
      case "/login":
      component = <Login />
      break;
      case "/dashboard":
      component = <Dashboard />
      break;
      case "/dashboard":
      component = <HelpAndSupport />
      break;
      case "/missing_grade_form":
      component = <MissingGradeForm />
      break;
     
      case "/instructor_contact":
      component = <InstructorContact />
      break;
      case "/grade_report":
      component = <GradeReport />
      break;
     
  }
  return (
    <>
    <Navbar/>
    <home />
  
    
    <div>
      
    {component}
    </div>
  
    
    </>
  
   
  );
}


export default App;