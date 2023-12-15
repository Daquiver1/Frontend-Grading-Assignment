import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={centerContent}>
                <p style={footerText}>© 2023 The Grade Reporting System. All rights reserved.</p>
                <p style={footerText}>Contact us: info@gradereportingsytem</p>
            </div>
        </footer>
    );
};

// Styles
const footerStyle = {
    background: '#001f3f',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    marginTop: '20px', // Adjust as needed
};

const centerContent = {
    maxWidth: '600px',
    margin: '0 auto',
};

const footerText = {
    fontSize: '0.9em',
    margin: '5px 0',
};

export default Footer;
