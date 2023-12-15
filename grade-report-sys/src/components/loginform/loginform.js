import React from 'react';
import './loginform.css';

const Loginform = () => {

  return (
    <div className="loginsect">
      <div className="text">
        <form>
          <div className="container">
            <label htmlFor="uname">
              <b>STUDENT ID</b>
            </label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label htmlFor="psw">
              <b>Pin</b>
            </label>
            <input type="password" placeholder="Enter Pin" name="psw" required />

            <button type="submit" className='submit'>LOG IN</button>
            <label>
              <input type="checkbox" defaultChecked name="remember" /> Remember me
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
