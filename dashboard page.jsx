<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - GradeTracker</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    header {
      background-color: #e74c3c;
      color: white;
      text-align: center;
      padding: 20px;
    }
    main {
      text-align: center;
      padding: 20px;
    }
    section {
      margin-top: 20px;
    }
    section p {
      margin-bottom: 15px;
      font-size: 1.2em;
    }
    p.overview {
      text-align: left;
    }
    p.alerts {
      text-align: left;
      font-weight: bold;
      color: #e74c3c;
    }
    nav {
      background-color: #2c3e50;
      padding: 10px;
    }
    nav a {
      color: white;
      margin: 0 15px;
      text-decoration: none;
      font-weight: bold;
    }
    footer {
      background-color: #34495e;
      color: white;
      text-align: center;
      padding: 10px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <header>
    <h2>Your Amazing Dashboard</h2>
  </header>
  <nav>
    <a href="/">Home</a>
    <a href="/login">Login</a>
    <a href="/dashboard">Dashboard</a>
    <a href="/grade-report">Grade Report</a>
    <a href="/missing-grade-form">Report Missing Grade</a>
    <a href="/instructor-contact">Instructor Contact</a>
    <a href="/help-support">Help & Support</a>
  </nav>
  <main>
    <section>
      <p class="overview">
        Welcome to your personalized dashboard! Here, you'll find a comprehensive overview of your academic journey, neatly organized for your convenience. Keep track of your grades, view upcoming assignments, and stay informed about your progress throughout the semester.
      </p>
      <p class="alerts">
        Important Alerts:
      </p>
      <p class="alerts">
        - You have one missing grade in 'Introduction to Physics.' Please report it as soon as possible.
      </p>
    </section>
  </main>
  <footer>
    <p>&copy; 2023 GradeTracker - Your Academic Companion</p>
  </footer>
</body>
</html>
