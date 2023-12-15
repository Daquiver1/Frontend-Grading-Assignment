import Home from "./components/pages/home/Home";
import Login from "./components/pages/Login/Loginform";
import Contact from "./components/pages/contact/Contact"
import Faq from "./components/pages/FAQ/Faq";
import Overview from "./components/pages/dashboard/Overview/Overview";
import Report from "./components/pages/dashboard/Report_Missing_Grade/Report";
import Alert from "./components/pages/dashboard/Missing_Grade_alert/Alert";

import{
  BrowerRouter,
  BrowserRouter,
  Route,
  Routes,
  route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="contact">
            <Route index element={<Contact />} />
            <Route path="FAQ" element={<Faq />} />
          </Route>
          <Route path="dashboard">
            <Route index element={<Overview />} />
            <Route path="report" element={<Report />} />
            <Route path="alert" element={<Alert />} />
          </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
