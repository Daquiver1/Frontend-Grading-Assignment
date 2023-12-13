import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="Home-first">
        <h1>Welcome to Missing Grade Reporting System for Students </h1> <br />
        <p>
          Empowering Students to Stay Informed and Take Control of Their Grades
          <br /> <br /> <br />
        </p>
      </div>
      <div className="Home-second">
        <h2>How It Works </h2>
        <p>
          The Students Missing Grade Report System simplifies the process of
          tracking and managing missing grades.
          <br /> <br /> <br /> <strong>Here's how it works</strong>
          <br /> <br />
        </p>
        <ol>
          <li>
            Create an Account
            <br />
            Sign up for a free account to get Started
          </li>
          <li>
            Submit Missing Grades
            <br />
            Easily submit missing grades for your course
          </li>
          <li>
            Recieve Notifications
            <br />
            Stay informed with timely notifications about your missing grades
            promtly
          </li>
          <li>
            Take Action
            <br />
            Take control of your academic progress by addressing missing
            <br /> <br /> <br />
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
          <br /> <br /> <br />
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
