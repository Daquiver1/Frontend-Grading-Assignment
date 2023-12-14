import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li><a href="/help-support">FAQ</a></li>
          {/* Add more footer links */}
        </ul>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Missing Grade Reporting System</p>
      </div>
    </footer>
  )
}

export default Footer