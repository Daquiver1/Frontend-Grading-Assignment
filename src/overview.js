import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f4f4f4',
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
  };

  return (
    <div style={styles.body}>
      <nav style={styles.nav}>
        <ul style={styles.navUl}>
          <li style={styles.navLi}>
            <Link to='/login' style={styles.navA}>Login</Link>
          </li>
          <li style={styles.navLi}>
            <Link to='/grade-report' style={styles.navA}>Grade Report</Link>
          </li>
          <li style={styles.navLi}>
            <Link to='/missing-grade' style={styles.navA}>Missing Grade</Link>
          </li>
          <li style={styles.navLi}>
            <Link to='/instructorcontact' style={styles.navA}>Instructor Contact</Link>
          </li>
          <li style={styles.navLi}>
            <Link to='/helpsupport' style={styles.navA}>Help and Support</Link>
          </li>
        </ul>
      </nav>

      <section style={styles.section} id="overview">
        <h1>Welcome to the Missing Grade Reporting System</h1>
        <p>This is an interactive platform to help you track and report missing grades on your record.</p>
      </section>

      <footer style={styles.footer}>
        <p>&copy; Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default Overview;
