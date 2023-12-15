import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="react-assignment/src/home.tsx" className="title">
          {" "}
          Back{" "}
        </Link>

        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="react-assignment/src/Home.tsx"> Home </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="react-assignment/src/Logins.tsx">Logins</NavLink>
          </li>
          <li>
            <NavLink to="react-assignment/src/Gradereport.tsx">
              {" "}
              Grade Report{" "}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="react-assignment/src/Missinggrade.tsx">
              {" "}
              Missing Grade Form
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="react-assignment/src/Dashboard.tsx">
              {" "}
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="react-assignment/src/Contact.tsx"> Contact </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="react-assignment/src/Help.tsx"> Help </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
