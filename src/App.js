import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Hero from './pages/Hero';
import Dashboard from './pages/Dashboard';
import MissingGrade from './pages/MissingGrade';
import GradeReport from './pages/GradeReport';
import Instructors from './pages/Instructors';
import Login from './pages/Login';
import Faq from './pages/Faq';
import Footer from './components/Footer';


function App() {
  return (
    <div>
    <Router>

      <Navbar/>

      <Switch>
        <Route exact path='/'><Hero/></Route>
        <Route exact path='/Dashboard'><Dashboard/></Route>
        <Route exact path='/MissingGrade'><MissingGrade/></Route>
        <Route exact path='/GradeReport'><GradeReport/></Route>
        <Route exact path='/Instructors'><Instructors/></Route>
        <Route exact path='/Login'><Login/></Route>
        <Route exact path='/FAQ'><Faq/></Route>
      </Switch>

      <Footer/>

    </Router>

    </div>
  );
}

export default App;