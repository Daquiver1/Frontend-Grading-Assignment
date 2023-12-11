import "./Logins.css";

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
          <button className="submitbutton"> Login </button>
        </div>
      </div>
    </div>
  );
}

export default Logins;
