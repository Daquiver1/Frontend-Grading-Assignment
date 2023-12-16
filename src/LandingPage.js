import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Header from './Header';

const LandingPage = () => {
  return (
    <div className='main-page'>
        <Header />
        <div className="columns-landing">
        <div className='col-4'>
            <FaUserCircle className='profile-landing' />
            <p>ANTHONY AFFUL BRONI</p>
        <div className='profile-info'>
                <ul>
                    <li>
                        <span className='label'>Student ID:</span>
                        <span className='value'>11121058</span>
                    </li>
                    <li>
                        <span className='label'>Level:</span>
                        <span className='value'>300</span>
                    </li>
                    <li>
                        <span className='label'>Programme:</span>
                        <span className='value'>BSc Information Technology</span>
                    </li>
                    <li>
                        <span className='label'>College:</span>
                        <span className='value'>Basic And Applied Sciences</span>
                    </li>
                    <li>
                        <span className='label'>Sex:</span>
                        <span className='value'>Male</span>
                    </li>
                    
                </ul>
                </div>
        </div>
        </div>
    </div>

  );
};

export default LandingPage;
