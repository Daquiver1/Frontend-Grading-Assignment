import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tutors from "./pages/Tutors";
import Support from "./pages/Support";
import MissingGrade from "./pages/MissingGrade";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="tutors" element={<Tutors />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="support" element={<Support />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="missingGrade" element={<MissingGrade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
