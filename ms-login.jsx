
import "./ms-login-styles.css";

function Login(){
  return (
    <div className="login-container">
      <form type="submit" className="body">
        <div className="wrapper">
          <div className="form-box-login">
            <h2>Login</h2>
            <div className="input-box">
              <input placeholder="STUDENT ID" type="id" required />
            </div>
            <div className="input-box">
              <input placeholder="PASSWORD" type="password" required />
            </div>
            <button type="submit" className="btn">
              login
            </button>
          </div>
        </div>
    </form>
    </div>
  );
}
export default Login;