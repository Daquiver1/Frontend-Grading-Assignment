import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="Navbar">
          <h1>
            <span>Missing Grade Reporting System</span>
          </h1>
          <div className="links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/grade">Grade Report</Link>
              </li>
              <li>
                <Link to="/help">Help and Support</Link>
              </li>
              <li>
                <Link to="/instructor">Instructor Contact</Link>
              </li>
              <li>
                <Link to="/missing">Missing Grade</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
