import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
  <nav>
           <Link to="/">Home</Link>
           <Link to="/LogIn">Log In</Link>
           <Link to="/InstructorContact">Instructor Contact</Link>
           <Link to="/HelpAndSupport">Help</Link>
           <Link to="/FAQSection">FAQ</Link>
  </nav>

      <Outlet />
    </>
  )
};

export default Layout;