import React from "react";
import { Outlet, Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div>
        <h1>Welcome</h1>
        <p>
          Track your grades, effortlessly keep tabs on your academicperformance
          and gain valuable insights into your educational journey.
        </p>
        <p>
          Navigate through your courses and pinpoint any grades that may need
          attention. Stay in control of your academic records with ease.
        </p>
        <p>
          Reporting missing grades has never been simpler,just fill the form,
          and you're on your way to resolving grade-related concerns
        </p>
        <p>
          Once you've reported a missing grade, relax and await positive
          feedback. Our team is dedicated to resolving issues promptly and
          ensuring that your academic records accurately reflect your
          achievements.
        </p>
      </div>

      <div>
        <h2 className="font-bold">Ready to get started?</h2>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </>
  );
};

export default Landing;
