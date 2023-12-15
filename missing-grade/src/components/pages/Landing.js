import React from 'react';

function LandingPage () {
  return (
    <div>
        <header>
        <h1 className='text-center mt-4'>Welcome to DCS Missing Grade Report System</h1>
        <p className='text-center'> Our application is designed to help students manage their grades efficiently.You can view your current grades, check your grade history, report missing grades,and contact instructors for assistance.</p>
        </header>
      
      <h2 className='mb-3'>Key Features</h2>
      <ul>
        <li><b>Dashboard:</b><br/> View your current grades and receive alerts for missing grades.</li>
        <li><b>Grade Report:</b><br/> Detailed view of your grades filtered by semester or academic year.</li>
        <li><b>Missing Grade Form:</b> <br/>Report missing grades easily.</li>
        <li><b>Instructor Contact Page:</b><br/> Connect with instructors and send messages.</li>
        <li><b>Help and Support:</b><br/> Access FAQs and contact support for assistance.</li>
      </ul>
      
      <h2>Get Started</h2>
      <p>
        To get started, log in with your student credentials and explore the various features available to you.
      </p>
      <div className="text-center mt-4">
      </div>
    </div>
  );
};

export default LandingPage;
