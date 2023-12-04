import { Routes, Route, Link } from "react-router-dom"
import "./components/pages/pages.js"
import { LoginPage } from "./components/pages/pages.js";
import LandPage from "./components/LandPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/" element={<LandPage></LandPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
