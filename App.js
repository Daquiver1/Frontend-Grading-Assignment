
import NavBar from './NavBar';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Report from './Report';
import Form from './Form';
import Contact from './Contact';
import Help from './Help';


function App() {
  const man = 'i am a boy'
  return (
    <Router>
      <div className="App">
        <NavBar />
      <div className="homePage">
        <Switch>

          <Route exact path ='/'>
          <Home />
          </Route>

          <Route path ='/A'>
          <Login />
          </Route>

          <Route path ='/B'>
            <Dashboard />
          </Route>

          <Route path ='/C'>
            <Report />
          </Route>

          <Route path ='/D'>
            <Form/>
          </Route>

          <Route path ='/E'>
            <Contact />
          </Route>

          <Route path ='/F'>
            <Help/>
          </Route>





        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
