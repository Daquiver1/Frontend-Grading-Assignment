import { useNavigate } from "react-router-dom";
import Header from "../Header";

function Login() {
  let navigate = useNavigate();

  const navigateToHome = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <div className="container col-lg-12">
      <Header />

      <div className="container mt-5 border border-dark">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <br /> <br />
            <h2 className="mb-4">Login</h2>
            {/* <form id="loginForm"> */}
            <div className="mb-3">
              <label className="form-label">Student ID</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password (PIN)</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btnlockandfeel"
              onClick={navigateToHome}
            >
              Login
            </button>
            <br />
            <br />
            <br />
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
