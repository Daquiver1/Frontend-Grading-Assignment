import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import GradeReport from './components/GradeReport';
import MissingGrade from './components/MissingGrade';
import Footer from './components/Footer';
import HelpSupport from './components/Help-Support';
import ContactPage from './components/ContactPage';




function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavBar></NavBar>
          <h1></h1>
         
	<Routes>
	<Route   path ='/' element = {<Login></Login>}>
		</Route>
    <Route  path ='/Dashboard' element = {<Dashboard/>}>
		</Route>
    <Route  path ='/GradeReport' element = {<GradeReport/>}>
		</Route>
    <Route  path ='/MissingGrade' element = {<MissingGrade/>}>
		</Route>
    <Route  path ='/Help-Support' element = {<HelpSupport/>}>
		</Route>
    <Route  path ='/Home' element = {<Home/>}>
		</Route>
    <Route  path ='/ContactPage' element = {<ContactPage/>}>
		</Route>
</Routes>
    <Footer/>
        </div>
    </div>
    </Router>
  );
}

export default App;
