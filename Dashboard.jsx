import React from 'react'
import {Link} from 'react-router-dom'
import './pages.css'


        

function Dashboard() {
  return (
    
    <div>
    <header>
    <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{color:'wheat'}}>Home</Link>
        <Link to="/Dashboard" className="navbar-brand" style={{color:'wheat'}}>Dashboard</Link>
        <Link to="/Help" className="navbar-brand" style={{color:'wheat'}}>Help</Link>
        <Link to="/MissingGrade" className="navbar-brand" style={{color:'wheat'}}>Report</Link>
    </div>
    </nav>
    </header>
    <main>
        <div className='container-fluid mt-4' style={{fontFamily:'sans-serif'}}>
                <h1>Dashboard</h1>
                <h3>This is where you have an overview of your grades.</h3>
        </div>
          <p className='container-fluid'>Current grades: N/A </p> 
          <div className='notifications'>
            <p>Notifications:</p>
            <p>There are currently no new notifications.</p>
          </div>
    </main>
</div>
  )
}

export default Dashboard