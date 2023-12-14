import React, { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from '../../assets/images/logo.jpg';
import userImg from '../../assets/images/avatar-icon.png';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/dashboard', display: 'Dashboard' },
  { path: '/gradeReport', display: 'Grade Report' },
  { path: '/missingGrade', display: 'Missing Grade' },
  { path: '/helpAndSupport', display: 'Help And Support' },
  { path: '/instructorContact', display: 'Instructor Contact' },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Company Logo" />
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500]'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav right */}
          <div className="flex items-center gap-4">
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
