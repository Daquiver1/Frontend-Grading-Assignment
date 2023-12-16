import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Landingpage from "./Pages/Landingpage";
import Login from "./Pages/Login";
import FAQ from "./Pages/FAQ";
import Dashboard from "./Pages/Dashboard";
import Gradereport from "./Pages/Gradereport";
import Gradeform from "./Pages/Gradeform";
import Instructors from "./Pages/Instructors";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />
      <Route  path="/faq" element={<FAQ />} />
      <Route  path="/dashboard" element={<Dashboard />} />
      <Route  path="/dashboard/gradereport" element={<Gradereport />} />
      <Route  path="/dashboard/gradeform" element={<Gradeform />} />
      <Route  path="/dashboard/instructors" element={<Instructors />} />
      <Route  path="/" element={<Navigate to="/login" />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
