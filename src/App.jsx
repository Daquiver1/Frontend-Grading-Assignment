import { Routes, Route } from "react-router-dom";
import "./components/pages/pages.js";
import { LoginPage } from "./components/pages/pages.js";
import LandPage from "./components/LandPage.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Gradereport from "./components/pages/Gradereport.jsx";
import MissingGrade from "./components/pages/MissingGrade.jsx";
import Help from "./components/pages/Help.jsx";
import Instructor from "./components/pages/Instructor.jsx";
import MinFooter from "./components/pages/MinFooter.jsx";
import LoginMin from "./components/pages/LoginMin.jsx";

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
        <Route path="/instructor" element={<Instructor></Instructor>}></Route>
        <Route path="/min" element={<MinFooter></MinFooter>}></Route>
        <Route path="/logmin" element={<LoginMin></LoginMin>}></Route>
      </Routes>
    </>
  );
}

export default App;
