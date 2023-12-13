import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import InstructorContactPage from './pages/ContactInstructor';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='/contactinstructor' Component={InstructorContactPage}/>
        {/* <Route path='/home' Component={Home}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
