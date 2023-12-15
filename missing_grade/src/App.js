import React from 'react';
import Header from './components/common/heading/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home'
import './components/Home/Hero/Hero.css'
import CourseHome from './components/allcourses/CourseHome';
import About from './components/abouts/About';
import Team from './components/Home/Team/Team';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path='/about' exact component = {About}/>
          <Route path='/courses' exact component = {CourseHome}/>
          <Route path='/team' exact component = {Team}/>
        </Switch>
      </Router>
    </>
  )
}

export default App