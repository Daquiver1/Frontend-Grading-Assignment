import { Routes, Route, Link } from "react-router-dom"
import "./components/pages/pages.js"
import { LoginPage } from "./components/pages/pages.js";
import LandPage from "./components/LandPage.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import TopBar from "./components/pages/TopBar.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/" element={<LandPage></LandPage>}></Route>
        <Route path="/topbar" element={<TopBar></TopBar>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  );
}

export default App;
