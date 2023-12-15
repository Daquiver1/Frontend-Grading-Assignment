import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <img src="https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg" className="img-fluid" alt="download.jpeg"></img>
      <div>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '20vh' }}>
          {/* Use Link instead of a button and set the "to" prop to the path of your login page */}
          <Link to="/login" className="btn btn-primary btn-lg">Let's Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
