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
            <Link to="/dashboard">Blogs</Link>
          </li>
          <li>
            <Link to="/grade_report">Blogs</Link>
          </li>
          <li>
            <Link to="/instructor_contact">Blogs</Link>
          </li>
          <li>
            <Link to="/Missing_grade_form">Blogs</Link>
          </li>
          <li>
            <Link to="/Login">Blogs</Link>
          </li>
          <li>
            <Link to="/Help">Blogs</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
