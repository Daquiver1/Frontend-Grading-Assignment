import "./App.css";
import Header from "./Component/Header";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logins from "./Logins";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Grades from "./Grades"
//import Report from "./Report";
//import Dashboard from "./Dashboard";
//import Contact from "./Contact";
//import Help from "./Help";

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
            path="react-assignment/src/Grades.tsx"
            element={<Grades />}
            ></Route>
          </Routes>
        </div>
      </Router>

      
    </>
  );
}

export default App;
