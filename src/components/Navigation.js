import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" ClassName="nav-active" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" ClassName="nav-active">
            About us
          </NavLink>
        </li>
        {/* Add more NavLink items for other routes */}
      </ul>
    </div>
  );
};

export default Sidebar;
