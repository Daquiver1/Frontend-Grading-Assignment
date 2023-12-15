import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-upper">
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
            </div>
            <hr />
            <div className="footer-lower">
                <div className="copyright-info">
                    <p>© 2023 Grade Guru. All rights reserved.</p>
                </div>
                <div className="social-media-links">
                    <Link to="https://www.facebook.com" target="_blank" rel="noreferrer" title='Facebook'>
                    <svg viewBox="0 0 30 30">
                        <path d="M15.6 30V19.4h5V15h-5v-3.1c0-1 .6-1.9 1.3-1.9h3.8V5.6h-3.8c-3.1 0-5.6 2.8-5.6 6.3V15H7.5v4.4h3.8v10.1C4.8 27.9 0 22 0 15 0 6.7 6.7 0 15 0s15 6.7 15 15c0 8.1-6.4 14.7-14.4 15z"></path>
                    </svg>
                    </Link>
                    <Link to="https://www.twitter.com" target="_blank" rel="noreferrer" title='X'>
                    <svg viewBox="0 0 19 19">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM8.18721 10.0675L3.64633 3.99603H7.14609L10.123 7.97639L13.8073 3.99603H14.8358L10.5825 8.59099L15.379 15.0039H11.8792L8.64689 10.6819L4.6462 15.0039H3.61771L8.18721 10.0675ZM6.76655 4.75353H5.15877L12.2586 14.2464H13.8663L6.76655 4.75353Z"></path>
                    </svg>
                    </Link>
                    <Link to="https://www.instagram.com" target="_blank" rel="noreferrer" title='Instagram'>
                    <svg viewBox="0 0 18 18">
                        <path clip-rule="evenodd" d="M9 0c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zM6.7 3.5h4.7c1.8 0 3.2 1.4 3.2 3.1v4.7c0 1.7-1.4 3.1-3.2 3.1H6.7c-1.8 0-3.2-1.4-3.2-3.1V6.7c0-1.8 1.4-3.2 3.2-3.2zM9 6.2c1.6 0 2.9 1.3 2.9 2.9S10.6 12 9 12s-3-1.3-3-2.9 1.3-2.9 3-2.9zm0 1.2c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7-.9 0-1.7-.8-1.7-1.7 0-.9.7-1.7 1.7-1.7zm2.8-1.7c.3 0 .6.2.6.6 0 .3-.2.6-.6.6-.3 0-.6-.2-.6-.6 0-.4.3-.6.6-.6zm-4.6-1h3.7c1.4 0 2.5 1.1 2.5 2.5v3.7c0 1.4-1.1 2.5-2.5 2.5H7.2c-1.4 0-2.5-1.1-2.5-2.5V7.2c-.1-1.4 1.1-2.5 2.5-2.5z" fill-rule="evenodd"></path>
                    </svg>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
