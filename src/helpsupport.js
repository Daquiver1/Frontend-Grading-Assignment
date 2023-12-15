import React from 'react';

const HelpSupport = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f4f4f4',
    },
    h1: {
      textAlign: 'center',
      fontSize: '40px',
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
    contactCol: {
      flexBasis: '48%',
      marginBottom: '30px',
    },
    contactColDiv: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '40px',
    },
    contactColIcon: {
      fontSize: '28px',
      color: '#241c66',
      margin: '10px',
      marginRight: '30px',
    },
    contactColInput: {
      width: '100%',
      padding: '15px',
      marginBottom: '17px',
      outline: 'none',
      border: '1px solid #ccc',
    },
  };

  return (
    <div style={styles.body}>
      

      <section>
        <h1 style={styles.h1}>Help & Support</h1>
      </section>

      <section id="overview" style={styles.contactCol}>
        <form>
          <input style={styles.contactColInput} type="text" placeholder="Enter your name" required />
          <input style={styles.contactColInput} type="email" placeholder="Enter email address" required />
          <input style={styles.contactColInput} type="text" placeholder="Enter your ID" required />
          <input style={styles.contactColInput} type="text" placeholder="Enter your subject" required />
          <textarea style={styles.contactColInput} rows="8" placeholder="Message" required></textarea>
          <button style={styles.button} type="submit" className="hero-btn red-btn">
            Send Message
          </button>
        </form>
      </section>

      <footer style={styles.footer}>
        <p>&copy; Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default HelpSupport;
