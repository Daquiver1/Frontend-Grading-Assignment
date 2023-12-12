import "./component.css";

function HomePage() {
  return (
    <>
      <div className="items_container">
        <div className="items">
          <img
            className="logo"
            src="images/logo.jpeg"
            alt="Logo of University of Ghana."
          />
        </div>
        <div className="items">
          <img
            className="profile"
            src="images/profile.jpg"
            alt="profile picture"
          />
        </div>
      </div>
      <br />
      <div className="nav_grid">
        <div className="nav">Dashboard</div>
        <div className="nav">Grade Report</div>
        <div className="nav">Missing Grade Form</div>
        <div className="nav">Contact Instructor</div>
        <div className="nav">Help and Support</div>
      </div>
      <br />

      <h1 style={{ color: "orange", textAlign: "center" }}>
        Welcome to the Missing Grade Report System
      </h1>
      <p>
        Welcome to our Missing Grade Report System! We understand that keeping
        track of grades is crucial for students and educators alike. Our system
        is designed to provide a seamless and efficient process for reporting
        and resolving missing grades.
      </p>
      <p>
        This system allows students, parents, or teachers to report missing
        grades for courses.
      </p>
      <p>
        Once a missing grade report is submitted, our dedicated team takes
        immediate action. They reach out to the respective instructor and
        initiate a thorough investigation to determine the cause of the missing
        grade. Our system sends automated notifications to both students and
        instructors, ensuring everyone is aware of the ongoing process.
      </p>
      <p>
        If you're an administrator, you can access the Admin Dashboard to manage
        reported missing grades.
      </p>
    </>
  );
}
export default HomePage;
