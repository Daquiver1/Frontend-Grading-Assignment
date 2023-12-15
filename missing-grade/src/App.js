import "./App.css";
import About from "./Component/About";
import Footer from "./Component/Footer";
import login from "./Component/login";
import Dashboard from "./Component/Dashboard";
import missinggradeform from "./Component/missinggradeform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import ContactUs from "./Component/Contactus";
import helpandsupport from "./Component/helpandsupport";
import GradeReport from "./Component/GradeReport";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={About} />
          <Route path="/login" exact Component={login} />
          <Route path="/Dashboard" exact Component={Dashboard} />
          <Route path="/missinggradeform" exact Component={missinggradeform} />
          <Route path="/Contactus" exact Component={ContactUs} />
          <Route path="/helpandsupport" exact Component={helpandsupport} />
          <Route path="/GradeReport" exact Component={GradeReport} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
