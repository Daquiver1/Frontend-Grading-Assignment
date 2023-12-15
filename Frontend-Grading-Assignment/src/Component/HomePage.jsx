// src/components/HomePage.js
import './Homepage.css'; // Import the stylesheet

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="header">
                <div className="logo-container">
                    <img src="./src/Component/comScience_logo.png" className="logo" width={600} />
                </div>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">View Grades</li>
                        <li className="nav-item">Report Missing Grades</li>
                        <li className="nav-item">Contact Us</li>
                    </ul>
                </nav>
            </header>

            <main className="main-content">
                <section className="welcome-section">
                    <h1 className="main-heading">Welcome to the Missing Grade Reporting System</h1>
                    <p className="sub-text">

                        The Missing Grade Reporting System provides students with a user-friendly interface to track and report grades not recorded in their academic profiles. With our system, you can easily view your grades, report missing grades, and communicate with instructors or academic administration.
                    </p>
                    <button className="cta-button">Get Started</button>
                </section>
            </main>

            <footer className="footer">
                <p className="footer-text">&copy; 2023 Missing Grade System. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/terms" className="footer-link">Terms of Service</a>
                    <a href="/privacy" className="footer-link">Privacy Policy</a>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;

