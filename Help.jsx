import React from 'react'
import {Link} from 'react-router-dom'
import './LoginSignup.css'

function Help() {
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
            <h1>Frequently Asked Questions about the grade reporting system.</h1>
    </div>    
    </main>
</div>
  )
}

export default Help