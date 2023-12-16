import React from 'react';

const Hero = () => {
  return (
    <div style={{
      color: 'white',
      maxWidth: '1240px',
      marginTop: '-96px',
      width: '100%',
      height: '100vh',
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      animation: 'fadeIn 1s ease-in-out' // Adding fade-in animation
    }}>
      <div>
        <p style={{
          color: '#00df9a',
          fontWeight: 'bold',
          padding: '2rem'
        }}>
          Welcome to Grade Nexus, your centralized hub for managing academic performance!
        </p>
        <h1 style={{
          fontSize: '5rem', // Adjusting font size for better responsiveness
          fontWeight: 'bold',
          paddingTop: '1rem', // Adding padding instead of py
          paddingBottom: '2rem' // Adding padding instead of py
        }}>
          Streamline your institution's grading process effortlessly.
        </h1>
        <p style={{
          fontSize: '2.5rem', // Adjusting font size for better responsiveness
          fontWeight: 'bold'
        }}>
          Stay organized, monitor performance trends, and empower educational excellence with Grade Nexus.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{
          backgroundColor: '#00df9a',
          width: '200px',
          borderRadius: '0.5rem',
          fontWeight: 'bold',
          margin: '1rem 0',
          padding: '0.75rem 1.5rem',
          color: 'black' // Adjusting button text color
        }}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
