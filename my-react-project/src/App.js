import "./App.css"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import dashboard from "./components/dashboard/dashboard"
import help from "./components/help/help"
import Contact from "./components/common/Contact/contact"
import Missinggrades from "./components/common/missing_grades/Missinggrades"






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
          <Route path='/missinggrades' exact component={Missinggrades} />
          
        </Switch>

      </Router>
      
    </>
  )
}

export default App