# Student Grade Reporting System Frontend

## Project Overview

This project is a front-end web application for a Student Grade Reporting System. It simulates a real-world application where students can view, report, and manage their academic grades. This system addresses the issue of missing or unrecorded grades in a student's profile.

## Application Structure

The application consists of 7 main pages:

- **Homepage:** Introduction to the system and its purpose.
- **Login Page:** Mock login interface for student authentication.
- **Dashboard:** Displays an overview of the student’s current grades and alerts for missing grades.
- **Grade Report:** Shows a detailed view of the student's grades filtered by semester or academic year.
- **Missing Grade Form:** Enables students to report missing grades.
- **Instructor Contact Page:** Lists instructors' contact information with a simulated email feature.
- **Help and Support:** Provides FAQs and a mock support contact form.

## Technical Details

- **Framework/Technology Used:** [React]
- **Responsive Design:** Implemented using [CSS Flexbox/Grid, Bootstrap, Tailwind CSS].
- **JavaScript Functionality:** Used for form validations, dynamic content rendering, and simulating interactions.

## Setup and Installation

To set up the project locally, follow these steps:

```bash
git clone https://github.com/Endykay23/11352955_DCIT205_Assignment1.git
cd 11352955_DCIT205_Assignment1
npx create-react-app 11352955_DCITR_205_Assignment1
npm start
```

This will start the application on `localhost` at the default port, which is usually Port 3000.

## Usage

Describe how to use the application, highlighting key functionalities such as logging in, viewing grades, reporting missing grades, and contacting instructors.

Component-Based Architecture:
React encourages a component-based approach, where each part of your user interface is broken down into reusable components. Create components for the login page, grade viewing, missing grades reporting, and contacting instructors.

Login Page:
Design a login page component that captures user credentials. Use React's state management to handle the input fields and submit button. Upon submission, the component can trigger an authentication process, possibly communicating with a backend server to verify the user's identity.

User Authentication:
React can handle the rendering and interaction of the login page, but the actual authentication logic should be implemented on the server-side. Upon successful authentication, you can manage the user's authentication state within your React application, allowing access to protected routes or components.

Dashboard and Navigation:
Create a dashboard component that acts as the main interface after login. Implement navigation within the dashboard to switch between different sections, such as viewing grades, reporting missing grades, and contacting instructors. React Router is commonly used for this purpose.

Grade Viewing:
Develop a component responsible for fetching and displaying the user's grades. Utilize React's lifecycle methods or useEffect hook to initiate API requests to the server. Render the retrieved data in a user-friendly format, allowing users to easily understand and navigate their grades.

Missing Grades Reporting:
Create a form-based component for reporting missing grades. Use React's state to manage the form input and handle the submission process. Upon form submission, the component can send a request to the backend to record the missing grade report.

Contacting Instructors:
Implement a component for contacting instructors, allowing users to send messages or inquiries. This component could include a form for composing messages and interacting with the backend to send the messages to the relevant instructors. React state management can help in handling the form input and submission.

State Management:
Leverage React's state management to maintain the state of the application. Keep track of user authentication status, grades data, form input, and other relevant information using local state or state management libraries such as Redux.

Event Handling:
Use React's event handling capabilities to respond to user interactions. For instance, trigger functions to handle button clicks, form submissions, or other user-triggered events. These events can then initiate the necessary actions, such as API calls or state updates.

Responsive UI:
Design your components with a responsive user interface to ensure a seamless user experience across various devices. Use CSS frameworks or styling libraries (such as Tailwind CSS or Styled Components) to create a visually appealing and user-friendly interface.

Feedback and Notifications:
Implement feedback mechanisms to inform users about the success or failure of actions. Use React to display notifications, error messages, or confirmation messages based on user interactions. Provide clear feedback to enhance the user experience.

Testing:
Consider testing your React components to ensure they function as expected. Use testing libraries like Jest and React Testing Library to write unit tests, integration tests, and end-to-end tests for your components and application functionalities.

By following these principles, you can create a robust and user-friendly school report system using React, allowing users to seamlessly log in, view grades, report missing grades, and contact instructors.

## Contribution

To contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes and push them to your branch.
4. Submit a pull request for review.

Please adhere to the project's coding standards and provide clear and detailed pull request descriptions.
