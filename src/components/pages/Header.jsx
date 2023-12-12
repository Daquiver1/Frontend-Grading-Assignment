import { Link } from "react-router-dom";
import "../../Styles/utils.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="side-bar inline-flex place-items-center flex-col gap-10 bg-blue-50 absolute top-0">
          <div className="image-text flex place-items-center gap-5">
            <img
              className="rounded-full w-20"
              src="../../../public/icon-1.jpg"
              alt="Company icon"
            />
          </div>
          <Link to="/">
            <button
              className="rounded-side w-full hover-effect custom-color"
              title="Click to login if you already have an account"
            >
              HOME
            </button>
          </Link>
          <Link to="/login">
            <button
              className="rounded-side w-full hover-effect custom-color"
              title="Click to login if you already have an account"
            >
              LOGIN
            </button>
          </Link>
          <Link to="/dashboard">
            <button
              className="rounded-side w-full hover-effect custom-color"
              title="Click to go to the dashboard"
            >
              DASHBOARD
            </button>
          </Link>
          <Link to="/help">
            <button
              className="rounded-side w-full hover-effect custom-color"
              title="Click here for help"
            >
              HELP
            </button>
          </Link>
          <p className="bg-slate-500 w-full h-[2px]"></p>
          <Link to="/create-account">
            <button
              className="rounded-side w-full hover-effect custom-color"
              title="Click here for help"
            >
              CREATE ACCOUNT
            </button>
          </Link>
          <Link to="/report">
            <button
              className="rounded-side w-full hover-effect custom-color"
              title="Click here for help"
            >
              GRADE REPORT
            </button>
          </Link>
          <Link to="/missing">
            <button
              className="rounded-side w-full hover-effect custom-color"
              title="Click here for help"
            >
              MISSING GRADE
            </button>
          </Link>
          <Link to="/instructor">
            <button
              className="rounded-side w-full hover-effect custom-color"
              title="Click here for help"
            >
              INSTRUCTOR
            </button>
          </Link>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default Header;
