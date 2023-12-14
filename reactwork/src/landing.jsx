import React from 'react';
import { Link } from 'react-router-dom';
import uglogo from './assets/uglogo.jpg';

const LandingPage = () => {
    return (
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Larger logo in the left corner of the header */}
                <img src={uglogo} alt="Logo" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
                <nav>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/instructorcontact">Instructor Contact</Link>
                        </li>
                        <li>
                            <Link to="/missinggrade">Missing Grade</Link>
                        </li>
                        <li>
                            <Link to="/gradereport">Grade Report</Link>
                        </li>
                        <li>
                            <Link to="/helpandsupport">Help & Support</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* Centered text and improved overview */}
            <div style={{marginLeft:"200px", marginRight:"200px",}}>
                <h1 style={{ fontSize: '2em', marginBottom: '20px', color: '#cda768' }}>Welcome to Our Missing Grade Report System</h1>
                <p style={{ fontSize: '1.2em', lineHeight: '1.5', margin: '0 auto 20px auto' }}>
                    Our system provides a comprehensive solution for tracking and managing missing grades.
                    Log in to access your dashboard, contact instructors, report missing grades, view grade reports,
                    and get help and support as needed.
                </p>
            </div>
        </div>
    );
}

export default LandingPage;
