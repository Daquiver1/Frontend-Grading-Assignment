import { Outlet, Link } from "react-router-dom";
export default function Navbar(){
    return(
            <>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/login">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/instructor_contact">Contact</Link>
                  </li>
                </ul>
              </nav>
        
              <Outlet />
            </>

    );
}