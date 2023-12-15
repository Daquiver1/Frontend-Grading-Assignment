import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="Home-first">
        <h1>Welcome to Missing Grade Reporting System for Students </h1> <br />
        <p>
          Empowering Students to Stay Informed and Take Control of Their Grades
          <br /> <br />
        </p>
      </div>
      <div className="Home-second">
        <p>
          The Students Missing Grade Report System simplifies the process of
          tracking and managing missing grades.
          <br /> <br /> <strong>Here's how it works</strong>
          <br />
        </p>
        <ol>
          <li>
            &#x2713;&nbsp;&nbsp; &nbsp; Create an Account to sign up for a free
            account to get started
          </li>

          <li>
            &#x2713;&nbsp;&nbsp; &nbsp;Easy submition of missing grades for your
            course
          </li>
          <li>
            &#x2713;&nbsp;&nbsp; &nbsp; Staying informed with timely
            notifications about your missing grades promtly
          </li>
          <li>
            &#x2713;&nbsp;&nbsp; &nbsp; Taking control of your academic progress
            by addressing missing
            <br /> <br />
          </li>
        </ol>
      </div>
      <div className="Home-third">
        <h2>Key Features</h2>
        <ul>
          <li> &#x2713;&nbsp;&nbsp; &nbsp; Effortless Grade Submission</li>
          <li>&#x2713;&nbsp;&nbsp; &nbsp;Real-time Notification</li>
          <li>&#x2713;&nbsp;&nbsp; &nbsp;User-friendly Interface</li>
          <li>&#x2713;&nbsp;&nbsp; &nbsp;Secure and Confidential</li>
          <br /> <br />
        </ul>
      </div>
      <div className="Home-fourth">
        <p>
          Ready to take control of your academic success? Sign up now and never
          miss another grade! <br /> <br />
          <Link to="/login">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
