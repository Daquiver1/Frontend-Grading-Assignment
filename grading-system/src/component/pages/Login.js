import React, { useState } from 'react';

const Login = () => {
  const [userID, setUserID] = useState('');
  const [pin, setPin] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication (replace with your actual authentication logic)
    if (userID === 'demo' && pin === '1234') {
      // Mock success
      alert('Login successful!');
    } else {
      // Mock failure
      alert('Invalid credentials. Please try again.');
    }

    // Reset form fields
    setUserID('');
    setPin('');
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  // Define the styles object
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      padding: "20px",
      border: '1px solid black',
    },
    blueText: {
      color: 'black',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.blueText}>Login Page</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <label htmlFor="userID" style={styles.blueText}>User ID:</label>
        <input
          type="text"
          id="userID"
          name="userID"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          required
        />

        <label htmlFor="pin" style={styles.blueText}>PIN:</label>
        <input
          type="password"
          id="pin"
          name="pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />

        <label style={styles.blueText}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          Remember me
        </label>

        <input type="submit" value="Login" style={styles.blueText} />
      </form>
    </div>
  );
};

export default Login;
