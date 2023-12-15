import React from 'react';

const GradeReport = () => {
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
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      border: '1px solid #ddd',
      padding: '12px',
      textAlign: 'left',
      backgroundColor: '#f2f2f2',
    },
    td: {
      border: '1px solid #ddd',
      padding: '12px',
      textAlign: 'left',
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
     
     

      <section id="grade-report" style={styles.dashboardItem}>
        <h2>Grade Report</h2>
        <p>Check your current grades and identify any missing ones.</p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Course</th>
              <th style={styles.th}>Grade</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data, replace with your actual data */}
            <tr>
              <td style={styles.td}>Mathematics</td>
              <td style={styles.td}>A</td>
              <td style={styles.td}>Complete</td>
            </tr>
            <tr>
              <td style={styles.td}>History</td>
              <td style={styles.td}>B+</td>
              <td style={styles.td}>Complete</td>
            </tr>
            <tr>
              <td style={styles.td}>English</td>
              <td style={styles.td}> </td>
              <td style={styles.td}>Missing</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer style={styles.footer}>
        <p>&copy; Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default GradeReport;
