import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between items-center h-16 bg-gray-200 px-4">
      <nav className="space-x-4">
        <NavLink to="/home" activeClassName="text-yellow-600">
          Home
        </NavLink>
        <NavLink to="/dashboard" activeClassName="text-yellow-600">
          Dashboard
        </NavLink>
        <NavLink to="/grade-report" activeClassName="text-yellow-600">
          Grade Report
        </NavLink>
        <NavLink to="/missing-grade" activeClassName="text-yellow-600">
          Missing Grade
        </NavLink>
        <NavLink to="/instructors" activeClassName="text-yellow-600">
          Instructors
        </NavLink>
        <NavLink to="/help" activeClassName="text-yellow-600">
          Help
        </NavLink>
      </nav>
      <div>
        <NavLink to="/login">
          <button className="btn bg-blue-500 text-white px-4 py-2 rounded">
            LOGOUT
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
