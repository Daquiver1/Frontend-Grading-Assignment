// Landing Page
const LandingPage = () => {
    return (
      <div>
        <h1>Welcome to the Missing Grade Reporting System</h1>
        <p>Overview of the system</p>
        {/* Navigation links */}
        <a href="/login">Login</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/grade-report">Grade Report</a>
        <a href="/missing-grade-form">Missing Grade Form</a>
        <a href="/instructor-contact">Instructor Contact</a>
        <a href="/help-support">Help and Support</a>
        {/* Footer */}
        <footer>© 2022 Missing Grade Reporting System</footer>
      </div>
    );
  };
  
  export default LandingPage;  