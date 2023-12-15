import React from 'react'
import {Link} from 'react-router-dom'


function HomePage() {
  return (
    <div>
        <header>
        <nav className="navbar navbar-light bg-primary">
            <div className="container-fluid ">
            <Link to="/" className="navbar-brand">Home</Link>
            
        </div>
        </nav>
        </header>
        <main>
            <div className='container mt-3'>
                <div>
                    <h1>Welcome</h1>
                    <p>This is where you can check and report missing grades, contact your instructors and so on. </p>
                    <Link to='/Login' className='btn btn-primary'>Click here to login</Link>
                </div>
            
            </div>

        </main>
    </div>
  )
}

export default HomePage