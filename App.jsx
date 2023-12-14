// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user}!</h2>
          <Dashboard />
        </div>
      ) : (
        <div>
          <HomePage />
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
