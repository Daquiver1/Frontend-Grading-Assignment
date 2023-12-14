import React from 'react';
import { Link } from 'react-router-dom';
import uglogo from './assets/uglogo.jpg';
const header = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100px' }}>
{/* Larger logo in the left corner of the header */}
<img src={uglogo} alt="Logo" style={{ width: '80px', height: '80px', marginRight: '20px' }} />
<nav>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
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
        <li>
            <Link to="/">Logout</Link>
        </li>
    </ul>
</nav>
</header>
    );
}
export default header;