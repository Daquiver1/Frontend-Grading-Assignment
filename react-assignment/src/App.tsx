import "./App.css";
import Header from "./Component/Header";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logins from "./Logins";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Gradereport from "./Gradereport"
import Missinggrade from "./Missinggrade";
import Contact from "./Contact";
import Help from "./Help";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        
          <Routes>
            <Route
              path="react-assignment/src/Logins.tsx"
              element={<Logins />}
            ></Route>
            <Route
              path="react-assignment/src/Home.tsx"
              element={<Home />}
            ></Route>
            <Route
              path="react-assignment/src/Dashboard.tsx"
              element={<Dashboard />}
            ></Route>
            <Route
              path="react-assignment/src/Missinggrade.tsx"
              element={<Missinggrade />}
            ></Route>
            <Route
              path="react-assignment/src/Gradereport.tsx"
              element={<Gradereport />}
            ></Route>
            <Route
              path="react-assignment/src/Contact.tsx"
              element={<Contact />}
            ></Route>
            <Route
              path="react-assignment/src/Help.tsx"
              element={<Help />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
