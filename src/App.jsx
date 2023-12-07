import { Routes, Route} from "react-router-dom"
import "./components/pages/pages.js"
import { LoginPage } from "./components/pages/pages.js";
import LandPage from "./components/LandPage.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Gradereport from "./components/pages/Gradereport.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/" element={<LandPage></LandPage>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/grades" element={<Gradereport></Gradereport>}></Route>
      </Routes>
    </>
  );
}

export default App;
