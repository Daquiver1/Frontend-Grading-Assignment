import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import MissingGrade from "./pages/MissingGrad";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/missing-grade" element={<MissingGrade />} />
      </Routes>
    </Router>
  );
}

export default App;
