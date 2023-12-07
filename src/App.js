import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <button className="login-button" onClick={() => window.location.href = '/login'}>
        Login
      </button>

      <div className="card">
        <p><strong>Missing Grade Reporting System</strong></p>
        <p className="card-footer">This website is used to enable students to view their grades, report missing grades and communicate with their instructors or academic administration</p>
      </div>
    </div>
  );
};

export default App;
