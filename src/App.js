import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Landing from "./Pages/Landing/Landing";
import Layout from "./Pages/Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FAQ from "./Pages/Help and Support/FAQ";
import MissingGradeForm from "./Pages/Missing Grade Form/Missing Grade Form";
import Login from "./Pages/Login/Login";
import GradeReport from "./Pages/Grade Report/Grade Report";
import Footer from "./Pages/Footer/Footer";
import Instructorcontactform from "./Pages/Instructors contact form/Instructors contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/Navbar" element={<Navbar />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
          <Route path="/GradeReport" element={<GradeReport />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route
            path="/MissingGradeForm"
            element={<MissingGradeForm />}
          ></Route>
          <Route
            path="/Instructorscontact"
            element={<Instructorcontactform />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
