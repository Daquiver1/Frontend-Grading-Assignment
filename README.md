# Missing Grade Reporting System

Welcome to the Missing Grade Reporting System, a web application developed to aid students in tracking and reporting missing grades in their academic profiles. This system provides a user-friendly interface, allowing students to view their grades, report missing grades, and communicate with instructors or academic administration.

## Features

- **Responsive Design:** The website is designed to provide an optimal viewing experience on various devices.
- **User Authentication:** Secure login form for students using Student ID and PIN with authentication simulation.
- **Dashboard Page:** Overview of the student's current grades, including alerts for any missing grades.
- **Grade Report Page:** Detailed view of all courses and respective grades, with the option to filter by semester/academic year.
- **Missing Grade Form Page:** Form to report a missing grade, including course name, instructor name, expected grade, and explanation field.
- **Instructor Contact Page:** List of instructors with contact details and an option to send a simulated email.
- **Help and Support Page:** FAQ section regarding grade reporting and a contact form for technical support.

## Permitted Technologies for Development

- **React:** A JavaScript library for building user interfaces.
- **CSS/Bootstrap/Tailwind:** Styling options for responsive and visually appealing design.
- **Vite (Optional):** A fast build tool for modern web development (optional).

## Project Structure

The project follows a modular structure, with components organized for each page:

src/
|-- components/
| |-- Navbar.jsx
| |-- LandingPage.jsx
| |-- LoginPage.jsx
| |-- DashboardPage.jsx
| |-- GradeReportPage.jsx
| |-- MissingGradeFormPage.jsx
| |-- InstructorContactPage.jsx
| |-- HelpAndSupportPage.jsx
|-- App.jsx
|-- index.jsx
|-- styles/
| |-- App.css


## File Structure

- **src/components:** Contains React components for each page and the Navbar component.
- **src/App.jsx:** Main application component with routing logic.
- **src/index.jsx:** Entry point for rendering the React application.
- **src/styles:** CSS files for styling each page.

## How to Run the Project

1. **Clone the repository:**
git clone https://github.com/your-username/missing-grade-reporting-system.git


2. **Navigate to the project directory:**
cd missing-grade-reporting-system


3. **Install dependencies:**
npm install


5. **Open your browser and go to:** `http://localhost:3000`

## Contributing

If you would like to contribute to the project, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Description of changes"`
4. Push the branch to your fork: `git push origin feature-name`
5. Create a pull request on GitHub.



