import Login from "./Login";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import Report from "./Report";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Missinggrade from "./Missinggrade";
import Help from "./Help";
import Dashboard from "./Dashboard";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
       
          <Routes>
            <Route path="my-react/src/Login.tsx" element={<Login />}></Route>

            <Route path="my-react/src/Home.tsx" element={<Home />}></Route>
            <Route path="my-react/src/Report.tsx" element={<Report />}></Route>
            <Route
              path="my-react/src/Missinggrade.tsx"
              element={<Missinggrade />}
            ></Route>
            <Route path="my-react/src/Help.tsx" element={<Help />}></Route>
            <Route
              path="my-react/src/Dashboard.tsx"
              element={<Dashboard />}
            ></Route>
            <Route
              path="my-react/src/Contact.tsx"
              element={<Contact />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
