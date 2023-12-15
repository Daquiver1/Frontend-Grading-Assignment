import React from 'react';

function Footer() {
  return (
    <footer className='footer bg-primary text-light text-center py-3 mt-4'>
      <div className='container'>
        <div className='d-flex '>
            <div className='flex-fill'><span>About</span></div>
            <div className='flex-fill'><span>Terms and conditions</span></div>
            <div className='flex-fill'><span>Contact</span></div>
            <div className='flex-fill'><span>Privacy Policy</span></div>
        </div>
        <div>
          <p>&copy; 2023 Missing Grade Report System</p>
        </div>
        
        
      </div>
    </footer>
  );
}
export default Footer;
