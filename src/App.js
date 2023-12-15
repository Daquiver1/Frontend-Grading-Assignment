import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Gradereport from "./pages/Gradereport"
import Missinggradeform from "./pages/Missinggradeform"
import Instructor from "./pages/Instructor"
import Hands from "./pages/Hands"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' components={Home} exact>
            <Home />
          </Route>
          <Route path='/login' components={Login} exact>
            <Login />
          </Route>
          <Route path='/dashboard' components={Dashboard} exact>
            <Dashboard />
          </Route>
          <Route path='/gradereport' components={Gradereport} exact>
            <Gradereport/>
          </Route>
          <Route path='/missinggradeform' components={Missinggradeform} exact>
            <Missinggradeform/>
          </Route>
          <Route path='/instructor' components={Instructor} exact>
            <Instructor/>
          </Route>
          <Route path='/hands' components={Hands} exact>
            <Hands/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
