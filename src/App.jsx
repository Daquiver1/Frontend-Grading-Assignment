import { Routes, Route, Link } from "react-router-dom"
import "./components/pages/pages.js"
import { LoginPage } from "./components/pages/pages.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
