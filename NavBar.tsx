import { Link } from "react-router-dom";
import "./form.css";

function Navbar() {
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary mynavbar">
        <ul className="nav nav-pills flex-column mb-auto">
          {/*   <li className="nav-item">
            <Link to="/" className="nav-link link-body-emphasis">
              Home
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/" className="nav-link link-body-emphasis">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/gradesreport" className="nav-link link-body-emphasis">
              Grades Report
            </Link>
          </li>
          <li>
            <Link
              to="/reportmissinggrade"
              className="nav-link link-body-emphasis"
            >
              Report a missing grade
            </Link>
          </li>
          <li>
            <Link to="/instructors" className="nav-link link-body-emphasis">
              Instructors
            </Link>
          </li>

          <li>
            <Link to="/helpandsupport" className="nav-link link-body-emphasis">
              Help and Support
            </Link>
          </li>

          <li>
            <Link to="/contactus" className="nav-link link-body-emphasis">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
