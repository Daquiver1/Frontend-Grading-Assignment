import React from 'react';
import uglogo from './assets/uglogo.png'
import './header.css'
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header style={HeaderAttributes}>
            <div style={{display: 'flex', alignItems: 'center' }}>
                <img src={uglogo} alt="uglogo" style={{ width: '70px', height: '70px', marginRight: '10px' }} />
                <p>UG MISSING GRADE REPORTING SYSTEM</p>
            </div>
            <nav>
                <ul className="nav-list1">
                    <li className="nav-item1" >
                    <Link to="/" className="nav-link1">Logout</Link>
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
export default header;