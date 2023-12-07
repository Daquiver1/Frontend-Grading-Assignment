import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
  <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LogIn.js">Log In</Link>
          </li>
          <li>
            <Link to="./InstructorContact">InstructorContact</Link>
          </li>
          <li>
            <link to = "/Dashboard">Dashboard</link>
          </li>
        </ul>
  </nav>

      <Outlet />
    </>
  )
};

export default Layout;