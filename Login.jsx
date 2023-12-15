import React from 'react';
import Header from './Header'
import Footer from './Footer'

const Login = () => {
  let studentId = '';
  let pin = '';
  let isAuthenticated = false;

  const handleLoginSubmit = (e) => {
    e.preventDefault();


    if (studentId === '12345678' && pin === '12345') {
      isAuthenticated = true;

      forceUpdate();
      console.log('Authentication successful!');
    } else {
      console.log('Authentication failed!');
    }
  };

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <>
    <Header></Header>
    <div className="login-container">
      <h2>Login Page</h2>

      {!isAuthenticated ? (
        <form onSubmit={handleLoginSubmit}>
          <label>
            Student ID:
            <input
              type="text"
              value={studentId}
              onChange={(e) => (studentId = e.target.value)}
              required
            />
          </label>
          <label>
            PIN:
            <input
              type="password"
              value={pin}
              onChange={(e) => (pin = e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      ) : (
        <p>You are logged in!</p>
      )}
    </div>
    <Footer></Footer>
    </>
  );
};

export default Login
