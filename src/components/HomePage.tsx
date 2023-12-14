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

      <h1 style={{ color: "orange", textAlign: "center" }}>
        Welcome to the Missing Grade Report System
      </h1>
      <p>
        Welcome to our Missing Grade Report System! Our framework is intended to
        give a consistent and proficient interaction for revealing and settling
        missing grades.
      </p>
      <p>
        With our simple to utilize interface, students can without a doubt
        investigate the system and submit missing grade reports with two or
        three snaps. The structure assembles key information, for instance, the
        course name, instructor's nuances, and the possibility of the missing
        grade. This data allows our administrative staff to investigate and
        decide the issue
      </p>
      <p>
        To report a missing grade, please navigate to the Report Missing Grade
        page.
      </p>
      <p>
        If you're an administrator, you can access the Admin Dashboard to manage
        reported missing grades.
      </p>
    </>
  );
}
export default HomePage;
