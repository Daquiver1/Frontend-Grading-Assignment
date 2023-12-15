import React from 'react';
import { Link } from 'react-router-dom';
import './Notification.css';

function Notification() {
  return (
    <div id="container">
      <div id="success-box">
        <div className="dot"></div>
        <div className="dot two"></div>
        <div className="face">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth happy"></div>
        </div>
        <div className="shadow scale"></div>
        <div className="message">
          <h1 className="alert">Success!</h1>
          <p>You can now access the portal.</p>
        </div>
        <Link to="/dashboard" className="button-box">
          <h1 className="green">Continue</h1>
        </Link>
      </div>
    </div>
  );
}

export default Notification;
