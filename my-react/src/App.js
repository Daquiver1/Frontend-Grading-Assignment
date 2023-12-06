import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*--components--*/
import Dashboard from "./components/Dashboard/Dashboard";
import Help from "./components/Help/Help";
import Homepage from "./components/Home Page/Homepage";
import LoginPage from "./components/Login Page/LoginPage";
import MissingGradeForm from "./components/Missing Grade Form/MissingGradesForm";
import Contact from "./components/Contact/Contact";
import Report from "./components/Report/Report";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>

        <div className="main">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/help" element={<Help />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/missinggradepage" element={<MissingGradeForm />} />
            <Route path="/report" element={<Report />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
