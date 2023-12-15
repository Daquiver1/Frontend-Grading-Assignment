import React from 'react';
import './App.css'; // Create a CSS file and import it for styling

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to GradeTracker</h1>
      </header>
      <nav>
        <a href="/landing page.html">Home</a>
        <a href="/login page.html">Login</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/grade-report">Grade Report</a>
        <a href="/missing-grade-form">Report Missing Grade</a>
        <a href="/instructor-contact">Instructor Contact</a>
        <a href="/help-support">Help & Support</a>
      </nav>
      <main>
        <section>
          <p>
            At GradeTracker, we're here to make your academic journey smoother. 
            Track your grades effortlessly and stay on top of your academic performance. 
            Simply log in using your student ID to access a comprehensive overview of your grades, receive alerts for any missing grades, and interact with your courses seamlessly
            Ready to take control of your grades? GradeTracker is designed to make your academic journey more manageable and fun.
          </p>
          <p>
            <strong>Explore the system using the links above and embark on a grade-boosting adventure!</strong>
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 GradeTracker - Your Academic Companion</p>
      </footer>
    </div>
  );
}

export default App;
