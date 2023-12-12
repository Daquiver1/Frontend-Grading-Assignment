import { Routes, Route } from "react-router-dom";
import "./components/pages/pages.js";
import { LoginPage } from "./components/pages/pages.js";
import LandPage from "./components/LandPage.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Gradereport from "./components/pages/Gradereport.jsx";
import MissingGrade from "./components/pages/MissingGrade.jsx";
import Help from "./components/pages/Help.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/" element={<LandPage></LandPage>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/report" element={<Gradereport></Gradereport>}></Route>
        <Route path="/missing" element={<MissingGrade></MissingGrade>}></Route>
        <Route path="/help" element={<Help></Help>}></Route>
      </Routes>
    </>
  );
}

export default App;
