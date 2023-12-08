import { Link } from "react-router-dom";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>AcademiaWave</h1>
          <p>Ride the Wave of Knowledge</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkeldn-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Quick Links </h4>
          <Link to="/home">Home</Link>
          <Link to="/about">Grades</Link>
          <Link to="/service">Reports</Link>
          <Link to="/contact">Instructors</Link>
          <Link to="">FAQ</Link>
        </div>
        <div>
          <h4>Community </h4>
          <a href="/">Change Log</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Version</a>
        </div>
        <div>
          <h4> Help and FAQ </h4>
          <a href="/">Change Log</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Version</a>
        </div>
        <div>
          <h4>Others </h4>
          <a href="/">Change Log</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Version</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
