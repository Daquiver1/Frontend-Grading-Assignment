import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./assets/navigation";
import Contact from "./assets/contact";
import LoginPage from "./assets/loginpage";
import Dashboard from "./assets/dashboard";
import Landingpage from "./assets/landingpage";
import GradeReport from "./assets/gradereport";
import HelpAndSupport from "./assets/helpandsupport";
import MissingGradeForm from "./assets/missinggradeform";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path = "/landingpage" element = {<Landingpage />}></Route> 
          <Route path="/loginpage" element={<LoginPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/gradereport" element={<GradeReport />}></Route>
          <Route
            path="/missinggradeform"
            element={<MissingGradeForm />}
          ></Route>
          <Route path="/helpandsupport" element={<HelpAndSupport />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
