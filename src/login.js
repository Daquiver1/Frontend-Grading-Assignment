import React from 'react';

const Login = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f4f4f4',
    },
    header: {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
    },
    nav: {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
    },
    navUl: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    navLi: {
      display: 'inline',
      marginRight: '20px',
    },
    navA: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 'bold',
    },
    section: {
      textAlign: 'center',
      padding: '50px',
    },
    footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    },
    form: {
      width: '300px',
      margin: '50px auto',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.body}>
     

      <section id="overview" style={styles.section}>
        <h1>Login</h1>
        <p>Login to access grades</p>
      </section>

      <form style={styles.form}>
        <label style={styles.label} htmlFor="studentId">Student ID:</label>
        <input style={styles.input} type="text" id="studentId" name="studentId" required />

        <label style={styles.label} htmlFor="pin">PIN:</label>
        <input style={styles.input} type="password" id="pin" name="pin" required />

        <button style={styles.button} type="submit">Login</button>
      </form>

      <footer style={styles.footer}>
        <p>&copy; Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default Login;
