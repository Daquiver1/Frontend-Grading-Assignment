import { useState } from "react";

// Local Imports
import Overview from "./components/Overview";
import MissingGrade from "./components/MissingGrade";
import GradeReport from "./components/GradeReport";
import Faq from "./components/Faq";
import ContactInstructor from "./components/ContactInstructor";
import Dashboard from "./components/Dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("overview")
  const [login, setLogin] = useState(false)

  return (
    <> 
      { login === true ? <Dashboard/> : <Overview login={setLogin}/> }
    </>
  );
}

export default App;
