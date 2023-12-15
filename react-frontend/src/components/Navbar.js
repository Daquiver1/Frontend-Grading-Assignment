import React, { useState } from "react";
import Logo from "../assets/ug_standard_new_sl_1.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftside" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/gradeReport">Grade Report</Link>
          <Link to="/missingGrade">Missing Grade Form</Link>
          <Link to="/instructorContact">Instructor Contact</Link>
          <Link to="/helpSupport">Help and Support</Link>
        </div>
      </div>
      <div className="rightside">
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/gradeReport">Grade Report</Link>
        <Link to="/missingGrade">Missing Grade Form</Link>
        <Link to="/instructorContact">Instructor Contact</Link>
        <Link to="/helpSupport">Help and Support</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
