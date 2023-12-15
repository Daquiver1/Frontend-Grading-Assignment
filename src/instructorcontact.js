import React from 'react';

const InstructorContact = () => {
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
    instructorList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    instructorItem: {
      marginBottom: '20px',
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
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
      

      <section id="instructor-contact" style={styles.dashboardItem}>
        <h2>Instructor Contact</h2>
        <p>Find contact information for your instructors below.</p>

        <ul style={styles.instructorList}>
          <li style={styles.instructorItem}>
            <h3>Godfrey A. Mills (BSc (Elect. Eng) Kumasi MSc PhD (Electronics & Comp) Gunma Japan)</h3>
            <p>Email: gmills@ug.edu.gh</p>
            <p>Phone: (123) 456-7890</p>
            <p>Research Interest:
              Optical information processing, signal & image processing, techniques for information encryption and security, 3D sensing and information processing, System-on-chip design and applications, Mobile computing and embedded technologies, and system modelling
            </p>
          </li>

          <li style={styles.instructorItem}>
            <h3>Gifty Buah</h3>
            <p>Email: gbuah@ug.edu.gh</p>
            <p>Phone: (987) 654-3210</p>
            <p>Research Interest:
              Research interests include dynamic spectrum management, Massive MIMO and next generation wireless communication technologies. Internet of things and its applications in healthcare and agriculture, as well as privacy and security issues in IoT.
            </p>
          </li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>&copy; Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default InstructorContact;
