<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grade Report - GradeTracker</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    header {
      background-color: #f39c12;
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
      text-align: left;
    }
    p.details {
      font-weight: bold;
      color: #f39c12;
    }
    table {
      width: 80%;
      margin: 20px auto;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #f39c12;
      padding: 10px;
      text-align: center;
    }
    th {
      background-color: #f39c12;
      color: white;
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
    <h2>Your Awesome Grade Report</h2>
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
      <p>
        Dive into the details of your academic performance with the Grade Report page. This page offers a comprehensive view of your grades across all courses, allowing you to reflect on your progress and identify areas for improvement. Your grades are neatly organized by semester, providing a chronological snapshot of your academic journey.
      </p>
      <p class="details">
        Display Detailed View and Filtering Options:
      </p>
      <p>
        Uncover the specifics of each course, including grades, credits, and instructor details. Use the filtering options to streamline your view by semester or academic year, allowing you to focus on specific periods or track your improvement over time.
      </p>
      <!-- Added Table with Subjects and Grades -->
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MATH 223</td>
            <td>B</td>
          </tr>
          <tr>
            <td>DCIT 203</td>
            <td>A</td>
          </tr>
          <tr>
            <td>DCIT 204</td>
            <td>A</td>
          </tr>
          <tr>
            <td>DCIT 205</td>
            <td>A</td>
          </tr>
        </tbody>
      </table>
      <!-- End of Table -->
    </section>
  </main>
  <footer>
    <p>&copy; 2023 GradeTracker - Your Academic Companion</p>
  </footer>
</body>
</html>


