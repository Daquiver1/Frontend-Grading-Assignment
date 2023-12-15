// import Searchbar from "./Componets/Searchbar";
//import Background from "./Componets/Background";
 import SignUp from "./Componets/SignUp"
import About from "./Componets/About";
 import Login from "./Componets/Login";
import Instructors from "./Componets/Instructors";
 import Contact from "./Componets/Contact";
import Landing from "./Componets/Landing";
//import { IoIosListBox } from "react-icons/fa";
import Report from "./Componets/Report";

import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentGradingDashboard from "./Componets/Dashboard";
// import StudentGradingDashboard from "./Componets/Dashboard";
// import Layout from "./Componets/Layout";
//import StudentGradingDashboard from "./Componets/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact Component={Landing} />
          <Route path="/dashboard" Component={StudentGradingDashboard} />
          <Route path="/report" Component={Report} />
          <Route path="/login"  Component={Login} />
          <Route path="/signUp"  Component={SignUp} />
          <Route path="/instructors" Component={Instructors} />
          <Route path="/contact" Component={Contact} />
          <Route path="/about" Component={About} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
