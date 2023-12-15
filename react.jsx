import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" onClick={toggleNav}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <header className="jumbotron">
        <h1 className="display-4">Welcome to Our Website</h1>
        <p className="lead">This is a sample landing page built with React.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </header>
      <section className="container">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet tristique ultricies.</p>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;