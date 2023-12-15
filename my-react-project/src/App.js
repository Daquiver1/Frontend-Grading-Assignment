import "./App.css"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import dashboard from "./components/dashboard/dashboard"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/dashboard' exact component={dashboard} />
        </Switch>

      </Router>
      
    </>
  )
}

export default App