import { useNavigate } from "react-router-dom";
import "./form.css";
// import ContactUs from "./pages/Login";

function Header() {
  let navigate = useNavigate();

  const navigateToLogin = () => {
    let path = "/login";
    navigate(path);
  };

  /*  const navigateToLogOut = () => {
    let path = "/login";
    navigate(path);
  }; */

  return (
    <div className="header">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="divunilogo">
            <a href="#">
              <img
                className="unilogo"
                src="https://dcs.ug.edu.gh/img/comScience_logo.png"
                alt="Home"
              />
            </a>
          </div>
          <div className="signinupcontrols">
            Logged User: student name
            <span className="btnsigninup">
              <button
                type="submit"
                className="btn btn-primary mb-3 btnlockandfeel"
                onClick={navigateToLogin}
              >
                Log Out
              </button>
            </span>
            {/*        <span className="btnsigninup">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                onClick={navigateToLogin}
              >
                Log In
              </button>
            </span> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
