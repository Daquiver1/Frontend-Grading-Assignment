import React from 'react';

function HomePage() {
 return (
    <div>
      <h1>Welcome to the Missing Grade Reporting System</h1>
      <p>Stay informed and organized with your grades. Sign up and start reporting missing grades today!</p>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/help">Help & Support</Link></li>
        </ul>
      </nav>
    </div>
 );
}

export default HomePage;