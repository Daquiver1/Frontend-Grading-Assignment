import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
function HomePage() {
 return (
    <div className='home'>
      <h1>Welcome to the Missing Grade Reporting System</h1>
      <p>Stay informed and organized with your grades. Sign up and start reporting missing grades today!</p>
      <nav>
        <ul>
        <li><Link to="/login">Login</Link></li>
         <li><Link to="/help-and-support">HelpAndSupportPage</Link></li>
         </ul>
      </nav>
    </div>
 );
}

export default HomePage;