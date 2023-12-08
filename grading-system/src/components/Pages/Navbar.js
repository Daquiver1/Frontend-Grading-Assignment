const Navbar = () => {
  return (
    <nav>
      <div className="Navbar">
        <h1>
          Missing <span>Grade Reporting</span> System
        </h1>
        <div className="links">
          <ul>
            <li>
              <a href="<Home/>">Home</a>
            </li>
            <li>
              <a href="<Login/>">Login</a>
            </li>
            <li>
              <a href="<Dashboard/>">Dashboard</a>
            </li>
            <li>
              <a href="<Grade/>">Grade Report</a>
            </li>
            <li>
              <a href="<Missing/>">Missing Grade</a>
            </li>
            <li>
              <a href="<Instructor/>">Instructor Contact</a>
            </li>
            <li>
              <a href="<Help/>">Help & Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
