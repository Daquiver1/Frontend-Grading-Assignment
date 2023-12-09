import NavBar from "../includes/Navigation bar";
import Footer from "../includes/footer";

const Home = () => {
  return (
    <div className="content">
      <div>
        <NavBar />
      </div>
      <h1 className="title">Welcome to the missing grade reporting system !</h1>
      <p className="p1">
        Are you struggling to keep tract of all your grades ? <br />
        We've got you covered. Our system is designed to empower students like
        you by providing a centralized platform to view grades, report missing
        grades, and connect with instructors or academic administration
        seamlessly.
      </p>
      <h2 className="Heading2">KEY FEATURES</h2>
      <div id="card-Main">
        <div class="card">
          <h1>VIEW GRADES</h1>
          <div class="card-body">
            <ul>
              <li>Gain instant access to your academic performance</li>
              <li>View detailed breakdown of your grades</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <h1>REPORT MISSING GRADES</h1>
          <div class="card-body">
            <ul>
              <li>
                Easily report any grades that are not reflected in your academic
                profile.
              </li>
              <li>
                Ensure timely recognition of your hard work and achievements.
              </li>
            </ul>
          </div>
        </div>
        <div class="card">
          <h1>Communicate with Us</h1>
          <div class="card-body">
            <ul>
              <li>
                Connect seamlessly with instructors and academic administration.
              </li>
              <li>
                Resolve discrepancies, seek clarification, and stay informed
                about your academic journey.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h1>Our User-Friendly Interface</h1>

      <ul>
        <li>
          Navigate through the system effortlessly with our intuitive and
          user-friendly design.
        </li>
        <li>
          Accessible on various devices to provide a consistent experience.
        </li>
      </ul>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
