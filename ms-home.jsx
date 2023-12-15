import Footer from "./ms-footer";
import Header from "./ms-header";
import "./ms-home-styles.css";
import { Link } from "react-router-dom";

function WelcomeMessage(){
  return (
    <div>
      <Header />
      <div className="w-body">
      <h1  className="welcome">Welcome to the Missing Grades Report Platform!</h1>
      <p className="p-text">kindly login to view your grades</p>
      <button className="button">
        <Link to="/">
          LOGIN
        </Link>
      </button>
    </div>
    <Footer />
    </div>
  );
}

export default WelcomeMessage;