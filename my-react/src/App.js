import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

// components

import Landingpage from './Components/Landing page/Landingpage';
import Dashboard from './Components/Dashboard/Dashboard';
import Gradeform from './Components/Grade form/Gradeform';
import Help from './Components/Help/Help';
import Contact from './Components/Contact/Contact';
import Report from './Components/Report/Report';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App relative">

    <Router>
    


      <div className="main">
       <Routes>
       <Route exact path="/" element={<Landingpage/>}/>
       <Route  path="/dashboard" element={<Dashboard/>}/>
       <Route  path="/gradeform" element={<Gradeform/>}/>
       <Route  path="/help" element={<Help/>}/>
       <Route  path="/contact" element={<Contact/>}/>
       <Route  path="/report" element={<Report/>}/>
       <Route  path="/login" element={<Login/>}/>
       </Routes>
       </div>

        
      </Router>
    </div>
  );
}

export default App;
