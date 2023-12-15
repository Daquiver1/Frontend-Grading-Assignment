import "./App.css"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import dashboard from "./components/dashboard/dashboard"
import Contact from "./components/contact/Contact"
import help from "./components/help/help"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/dashboard' exact component={dashboard} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/help' exact component={help} />
        </Switch>

      </Router>
      
    </>
  )
}

export default App