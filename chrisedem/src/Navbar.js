const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Scholar Grade Support</h1>
      <div className="links">
        <a href="/" style={{ textDecoration: 'none' }}>Home</a>
        <a href="Login" style={{ backgroundColor: ' #00cfe6', color: 'white', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none' }}>Login</a>
        <a href="Dashboard Page">Dashboard</a>
        <a href="Grade Report Page">Grade Report</a>
        <a href="Missing Grade Page">Missing Grade Page</a>
        <a href="Instructor Contact Page">Instructor Contact</a>
        <a href="Help and Support Page">Help and Support</a>
      </div>
    </nav>
  );
}

export default Navbar;
