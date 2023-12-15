import React from 'react';

const MissingGrade = () => {
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
    dashboardItem: {
      backgroundColor: 'white',
      padding: '20px',
      margin: '20px',
      textAlign: 'left',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    form: {
      maxWidth: '400px',
      margin: '0 auto',
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
    textarea: {
      width: '100%',
      height: '100px',
      padding: '10px',
      marginBottom: '20px',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#333',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
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
      

      <section id="missing-grade-form" style={styles.dashboardItem}>
        <h2>Missing Grade Form</h2>
        <p>Submit information about any missing grades using the form below.</p>

        <form style={styles.form}>
          <label style={styles.label} htmlFor="course">Course Name:</label>
          <input style={styles.input} type="text" id="course" name="course" required />

          <label style={styles.label} htmlFor="courseCode">Course Code:</label>
          <input style={styles.input} type="text" id="courseCode" name="courseCode" required />

          <label style={styles.label} htmlFor="details">Details:</label>
          <textarea style={styles.textarea} id="details" name="details" required></textarea>

          <button style={styles.button} type="submit">Submit</button>
        </form>
      </section>

      <footer style={styles.footer}>
        <p>&copy; Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default MissingGrade;
