import "./component.css";

function HomePage() {
  return (
    <>
      <div className="items_container">
        <div className="items">
          <img
            className="logo"
            src="images/logo.png"
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
        <div className="nav">1</div>
        <div className="nav">2</div>
        <div className="nav">3</div>
        <div className="nav">4</div>
        <div className="nav">5</div>
        <div className="nav">6</div>
        <div className="nav">7</div>
      </div>
      <br />

      <h1 style={{ color: "orange", textAlign: "center" }}>
        Welcome to the Missing Grade Report System
      </h1>
      <p>
        This system allows students, parents, or teachers to report missing
        grades for courses.
      </p>
      <p>
        To report a missing grade, please navigate to the Report Missing Grade
        page.
      </p>
      <p>
        If you're an administrator, you can access the Admin Dashboard to manage
        reported missing grades.
      </p>
      <div>
        <a href="/report-missing-grade">Report Missing Grade</a>
        <a href="/admin-dashboard">Admin Dashboard</a>
      </div>
    </>
  );
}
export default HomePage;
