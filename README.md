# Missing Grade Reporting System

 ## Author

- Name: Sarfo Sarah
- Student ID: 11261099
- Email: sarahsarfo238@gmail.com

## Overview

The Missing Grade Reporting System is a web application designed to assist students in tracking and reporting grades that have not been recorded in their academic profiles. The goal is to create an interactive, user-friendly interface that enables students to view their grades, report missing grades, and communicate with instructors or academic administration.

## Features

### Responsive Design

The website is fully responsive, ensuring it functions well on both desktop and mobile devices.

### Landing Page

- Provides an overview of the system.
- Contains navigation links to other pages.

### Login Page

- Secure login form for students using Student ID and PIN.
- Simulates authentication without a real backend.
- Username:123456
- Password:1234

### Dashboard Page

- Displays an overview of the student’s current grades.
- Includes alerts or notifications for any missing grades.

### Grade Report Page

- Shows a detailed view of all courses and respective grades.
- Offers an option to filter by semester/academic year.

### Missing Grade Form Page

- Provides a form to report a missing grade with fields for Course name, Instructor name, Expected grade, and an Explanation field.
- Features a submit button that triggers a confirmation message without a real submission.

### Instructor Contact Page

- Lists instructors with contact details.
- Allows sending a simulated email to the instructor by clicking on their email address.

### Help and Support Page

- Contains an FAQ section regarding grade reporting.
- Includes a contact form for technical support (mock-up).

### Navigation

- Features a consistent navbar/sidebar for easy navigation throughout the website.
- Includes a footer with additional information or links.

## Technologies Used

- React for building the user interface.
- CSS and Bootstrap for styling.
- Vite for a faster development environment.

## Project Structure

```
src/
|-- App.css
|-- App.tsx
|-- DashboardPage.css
|-- DashboardPage.tsx
|-- Footer.css
|-- Footer.tsx
|-- GradeReportPage.css
|-- GradeReportPage.tsx
|-- HelpSupportPage.css
|-- HelpSupportPage.tsx
|-- InstructorContactPage.css
|-- InstructorContactPage.tsx
|-- LandingPage.tsx
|-- LoginPge.css
|-- LoginPge.tsx
|-- MissingGradeFormPage.css
|-- MissingGradeFormPage.tsx
|-- Navbar.tsx
...
```

## Setup and Running the Project

To set up and run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open `http://localhost:3000` in your browser to view the application.

## Testing

Comprehensive tests have been written for each component using Jest, ensuring the reliability and stability of the user interface. The tests cover a range of user interactions and component states to validate the functionality of the system. By prioritizing testing, we aim to maintain a high standard of quality and provide a bug-free experience for the end-users.

### Test Coverage

- **Landing Page**: Verifies the presence of system overview and navigation links.
- **Login Page**: Ensures the login form is secure and mock authentication behaves as expected.
- **Dashboard Page**: Checks for the correct display of grades and missing grade alerts.
- **Grade Report Page**: Confirms the functionality of the grade filtering system.
- **Missing Grade Form Page**: Validates form submission and confirmation message display.
- **Instructor Contact Page**: Tests the simulated email feature to ensure proper interaction.
- **Help and Support Page**: Assesses the FAQ section and technical support form.

Each page is accompanied by a corresponding test suite that simulates user behavior and verifies that the components respond correctly to user inputs and actions. The Jest framework provides a robust testing environment that is integral to our development process.

---

For developers looking to contribute or review the testing suites, please refer to the `tests` directory within the project structure. Each test file is named after the component it is testing, following the convention `ComponentName.test.tsx`.

## Contributions

This project welcomes contributions. To contribute, please fork the repository, make your changes, and submit a pull request with a clear description of your improvements
