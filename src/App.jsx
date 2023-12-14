import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import Instructors from "./pages/Instructor";
import GradeReport from "./pages/GradeReport";
import Dashboard from "./pages/Dashboard";
import MissingGrade from "./pages/MissingGrade";
import HelpSupport from "./pages/HelpSupport";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />}  />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/grade-report" element={<GradeReport />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/missing-grade" element={<MissingGrade />} />
          <Route path="/help" element={<HelpSupport />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
