import React from "react";
import "./LogInPage.css";

function LogInPage() {
  return (
    <>
      <div className="body">
        <div className="kk">
          <form id="loginForm" action="your_backend_script.php" method="post">
            <span>
              <h2>Login</h2>
            </span>
            <div className="input-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="User Name"
                required
              />
            </div>
            <br />
            <div className="input-group">
              <input
                type="password"
                id="username"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <br />
            <div className="input-group">
              <input
                type="submit"
                className="submit"
                name="submit"
                value={"Login"}
              />
            </div>
            <div className="bottom">
              <div className="left">
                <input type="checkbox" id="check" />
                <label for="check">Remember Me</label>
              </div>
              <div className="right">
                <label>
                  <a href="b"> Forgot Password?</a>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default LogInPage;
