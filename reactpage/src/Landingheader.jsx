import React from 'react';
import uglogo from './assets/uglogo.png'
import './Landingheader.css'
import { Link } from 'react-router-dom';

const Landingheader = () => {
    return (
        <header style={HeaderAttributes}>
            <div style={{display: 'flex', alignItems: 'center' }}>
                <img src={uglogo} alt="uglogo" style={{ width: '70px', height: '70px', marginRight: '10px' }} />
                <p className='ugtext1'>UG MISSING GRADE REPORTING SYSTEM</p>
            </div>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Instructor Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Missing Grade
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Grade Report
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Help & Support
                        </Link>
                    </li>
                </ul>
            </nav>
            </header>
    );
}

const HeaderAttributes= {
    display: 'flex',
    background: '#001f3f',
    color: 'white',

}
export default Landingheader;