import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Report from './Report'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './component/Header';
import Form from './Form';
import Help from './Help';
import Dashboard from './Dashboard';
import Contact from './Contact';

import './App.css'

function App() {
  return (
    <>
  <Router>
    <div>
     <Header/>
    <Routes>
    <Route path='react-app/src/Login.tsx' element={<Login/>}></Route>
      <Route path='react-app/src/Home.tsx' element={<Home/>}>
      </Route>
      <Route path='react-app/src/Report.tsx' element={<Report/>}></Route>
      <Route path='react-app/src/Form.tsx' element={<Form/>}></Route>
      <Route path='react-app/src/Help.tsx' element={<Help/>}></Route>
      <Route path='react-app/src/Dashboard.tsx' element={<Dashboard/>}></Route>
      <Route path='react-app/src/Contact.tsx' element={<Contact/>}></Route>
    </Routes>
    </div>
  </Router>
  
  
     </>
  )
}

export default App;
