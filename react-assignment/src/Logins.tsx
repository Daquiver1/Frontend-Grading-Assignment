import "./Logins.css";
import { Link } from "react-router-dom";

function Logins() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="LoginBox">
        <div className="LoginHeader"> LOGIN </div>
        <div className="inputs">
          <p className="title"> Student ID </p>
          <input className="id" placeholder="Enter your Student ID" />
          <p className="title"> Password </p>
          <input
            className="password"
            placeholder="Enter your password"
            type="password"
          />
          <p className="title"> Student Email </p>
          <input className="email" placeholder="akbresaa@st.ug.edu.gh" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/react-assignment/src/Gradereport.tsx">
            <button className="submitbutton"> Login </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logins;
