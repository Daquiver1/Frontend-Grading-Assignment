import Nav from './Nav';
import Contact from './Contact';
import Support from './Support';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import Form from './Form';
import Grades from './Grades';
import {Routes, Route} from 'react-router-dom';

import './App.css';



function App() {
  return (
    <Routes>
      <Route path="nav" element={<Nav />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Form />} />
      <Route path="/grades" element={<Grades />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/support" element={<Support />} />
    </Routes>
      
  )
  
}

export default App;
