# Student Grade Reporting System Frontend

## Project Overview

This project is a front-end web application for a Student Grade Reporting System. It simulates a real-world application where students can view, report, and manage their academic grades. This system addresses the issue of missing or unrecorded grades in a student's profile.

## Application Structure

The application consists of 7 main pages and the navbar:
 # Landing Page

The landing page of this project serves as the entry point for users. It provides a welcoming interface and highlights key features. Below is an overview of the components used in the landing page:

## Components

### 1. AppLanding

The main landing page component containing:

- Text Section: Introduction to the platform with a login prompt.
- Image Carousel: Engaging visuals showcasing the Grade Report System.
- Academic Overview Card: Brief description of the platform's academic features.
- Feature Cards: Quick links to important sections like the Dashboard, Grade Report, Missing Form Submission, and Instructors Page.


# App Login Component

The `App Login` component represents the landing page section responsible for user login. It provides a visually appealing interface with a radial gradient background and glass-like card for login input fields.

## Component Overview

### Styling

- Utilizes a radial gradient background with multiple color stops to create a visually appealing background.
- Includes two radius-shaped elements (`radius-shape-1` and `radius-shape-2`) to enhance the overall design.
- Applies a glass-like effect (`bg-glass`) to the login card using `backdrop-filter`.

### Structure

- Displays a heading with the title "AcademiaTracker" and a subheading "SIGN UP!".
- Features a brief description paragraph with an optimistic tone.
- Includes a form for user input with fields for email, student ID, and password.
- Utilizes Bootstrap styling for responsiveness and a clean layout.


# AppDashboard Component

The `AppDashboard` component represents the user dashboard in the Grade Report System. It displays current grades for subjects and provides alerts for missing grades. Additionally, it includes navigation buttons to access the Grade Report and Missing Grade Form.

## Component Overview

### Data

- Utilizes mock data (`currentGrades`) to simulate current grades for different subjects.
- Maintains a list of missing grades (`missingGrades`) to alert users about incomplete information.

### UI Components

- Renders a heading "Dashboard" for the user.
- Displays current grades using a responsive grid layout.
- Provides a danger alert if there are missing grades, listing the subjects that require attention.
- Includes navigation buttons to access the Grade Report and Missing Grade Form.

# AppGradeReport Component

The `AppGradeReport` component represents the Grade Report section in the AcademiaTracker application. It allows users to view and analyze individual course grades for each semester.

## Component Overview

### Data

- Utilizes sample data for the grade report, including the student's name, overall grade, and a summary.
- Provides mock data for dropdowns to select semesters and years.

### UI Components

- Displays dropdowns for selecting the semester and year.
- Renders a grade report card with the student's overall grade and a summary.
- Dynamically generates and displays individual course grades based on the selected semester and year.
- Includes FontAwesome icon for a visually appealing representation.

### Functions

- Handles changes in the selected semester and year through dropdowns.
- Dynamically renders courses based on selected semester and year.
- Generates random sample courses and grades for demonstration purposes.
- 
# AppMissingGradeForm Component

The `AppMissingGradeForm` component represents the form for submitting a missing grade request in the AcademiaTracker application. Users can provide details such as student name, student ID, course code, instructor email, and a reason for the missing grade.

## Component Overview

### State

- Utilizes React `useState` to manage form input state for student name, student ID, course code, instructor email, and reason.

### Input Handlers

- Implements input change handlers for each form field to update state accordingly.

### Form Submission

- Implements a `handleSubmit` function to log the form data to the console and clear form fields after submission.

### UI Components

- Renders a simple form with input fields for student name, student ID, course code, instructor email, and reason.
- Includes a submit button to trigger the form submission.

# AppInstructorContact Component

The `AppInstructorContact` component displays a list of instructors along with their contact information, including name, role, phone number, email, and a profile image. Users can view and contact instructors through the provided email addresses.

## Component Overview

### Instructors Data

- Contains an array of instructor objects with properties such as `id`, `name`, `role`, `phone`, `email`, and `image`.

### Handling Email Click

- Implements a `handleEmailClick` function to handle the click event when the "Send Email" button is clicked. For demonstration purposes, it displays an alert, but you can replace it with your logic to open an email client.

### UI Components

- Utilizes a grid layout to display instructor information, with each instructor having a profile image, name, role, phone number, email, and a "Send Email" button.


# AppHelpAndSupport Component

The `AppHelpAndSupport` component provides a user interface to answer frequently asked questions related to grade reports, missing grades, and university processes. Users can also submit their own questions for assistance.

## Component Overview

### State Management

- Utilizes the `useState` hook to manage the state of the user's question input.

### Handling User Input

- Implements a `handleUserQuestionChange` function to update the component's state based on the user's question input.
- Provides a `handleSubmitQuestion` function to log the user's question to the console (for demonstration purposes) and clear the input field.

### Frequently Asked Questions (FAQs)

- Uses an accordion-style layout to display frequently asked questions with collapsible answers. Questions cover topics such as accessing grades, addressing grading errors, GPA calculation, and more.

### User-Submitted Questions

- Allows users to submit their own questions through a textarea input.
- Includes a "Submit Question" button to trigger the submission of user questions.

# AppNavbar Component

The `AppNavbar` component provides a responsive navigation bar for the AcademiaTracker application. It includes a brand name, navigation links, and styles for a clean and user-friendly interface.

## Component Overview

### Styles

- Defines styles for the navigation bar, including background color, border, and padding.
- Sets styles for the brand name and navigation links, including color, font size, and hover effects.

### Navigation Links

- Utilizes the `react-router-dom` library to create navigation links.
- Links include routes to Home, Dashboard, Login, Grade Report, Missing Grade Form, Instructor Contact, and Help & Support.

### Responsive Design

- Incorporates the `Navbar.Toggle` and `Navbar.Collapse` components from `react-bootstrap` for responsive navigation on smaller screens.
- Styles and organizes the navigation links for both left and right sides of the navbar.

  
## Technical Details

- **Framework/Technology Used:** [React]
- **Responsive Design:** Implemented using [CSS Flexbox/Grid, Bootstrap, Tailwind CSS].
- **JavaScript Functionality:** Used for form validations, dynamic content rendering, and simulating interactions.


# AcademiaTracker React App

## Overview

AcademiaTracker is a React web application designed to help students with grade-related queries, access to instructor contacts, and support services.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Running the Project](#running-the-project)
- [Additional Steps](#additional-steps)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

## Project Setup

1. **Create a New React App:**

    ```bash
    npx create-react-app your-academia-tracker-app
    ```

    Replace `your-academia-tracker-app` with your desired project name.

2. **Navigate to the Project Directory:**

    ```bash
    cd your-academia-tracker-app
    ```

3. **Clean Up the Initial Project Structure:**

    Remove unnecessary files and folders from the `src` directory.

4. **Copy Component Files:**

    Copy the component files into the `src` directory.

5. **Create Routing:**

    Install the `react-router-dom` library for routing:

    ```bash
    npm install react-router-dom
    ```

    Update the `index.js` file in the `src` directory.

6. **Update App.js:**

    Replace the content of `src/App.js` with the provided code.

## Running the Project

1. **Start the Development Server:**

    ```bash
    npm start
    ```

    Open [http://localhost:3000/](http://localhost:3000/) in your browser.

2. **Explore the App:**

    Visit different routes to explore the components.

## Additional Steps

- **Styling:** Add your own styling to the components.

- **Customization:** Customize the components based on your project requirements.

## Contributing

If you'd like to contribute, please fork the repository and create a pull request.


