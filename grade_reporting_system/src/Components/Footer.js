import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Email: info@example.com</p>
                <p>Phone: +1234567890</p>
                <p>Address: 1234 Street, City, Country</p>
            </div>
            <div className="quick-links">
                <h3>Quick Links</h3>
                <Link to="/">Landing Page</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/help-support">Help & Support</Link>
            </div>
            <div className="social-media-links">
                <h3>Social Media Links</h3>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            </div>
            <div className="copyright-info">
                <p>© 2023 Your Organization. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
