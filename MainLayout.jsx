import React from 'react'
import {Link} from 'react-router-dom'

function MainLayout({children}) {
  return (
    <div>
        <header>
        <nav className="navbar navbar-light bg-primary">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/Dashboard" className="navbar-brand">Dashboard</Link>
        </div>
        </nav>
        </header>
        <main>
            <div className='container mt-3'>
               {children} 
            </div>

        </main>
    </div>
  )
}

export default MainLayout