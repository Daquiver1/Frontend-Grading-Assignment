// src/App.js
import React, { useState } from 'react';
import Login from './Login';

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
          {/* Add your main application content here */}
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
