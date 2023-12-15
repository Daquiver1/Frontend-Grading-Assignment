import { Link } from "react-router-dom";
import "../../Styles/utils.css";

const MinHeader = () => {
  return (
    <>
      <div className="container xl:hidden">
        <div className="side-bar xl:hidden max-xl:text-sm flex place-items-center gap-5 bg-blue-50 relative top-0">
          <div className="image-text flex place-items-center gap-5">
            <img
              className="rounded-full w-20"
              src="../../../public/icon-1.jpg"
              alt="Company icon"
            />
          </div>
          <Link to="/">
            <button
              className=" hover:rounded-side w-full hover-effect custom-color"
              title="Click to login if you already have an account"
            >
              HOME
            </button>
          </Link>
          <Link to="/login">
            <button
              className="hover:rounded-side hover-effect custom-color"
              title="Click to login if you already have an account"
            >
              LOGIN
            </button>
          </Link>
          <Link to="/dashboard">
            <button
              className="hover:rounded-side w-full hover-effect custom-color"
              title="Click to go to the dashboard"
            >
              DASHBOARD
            </button>
          </Link>
          <Link to="/help">
            <button
              className="hover:rounded-side w-full hover-effect custom-color"
              title="Click here for help"
            >
              HELP
            </button>
          </Link>
          <Link to="/create-account">
            <button
              className="hover:rounded-side w-full hover-effect custom-color"
              title="Click here for help"
            >
              CREATE ACCOUNT
            </button>
          </Link>
          <Link to="/report">
            <button
              className="hover:rounded-side w-full hover-effect custom-color"
              title="Click here for help"
            >
              GRADE REPORT
            </button>
          </Link>
          <Link to="/missing">
            <button
              className="hover:rounded-side w-full hover-effect custom-color"
              title="Click here for help"
            >
              MISSING GRADE
            </button>
          </Link>
          <Link to="/instructor">
            <button
              className="hover:rounded-side w-full hover-effect custom-color"
              title="Click here for help"
            >
              INSTRUCTOR
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default MinHeader;
