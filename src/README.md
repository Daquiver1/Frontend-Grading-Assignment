# Student Grade Reporting System Frontend

## Project Overview

This project is a front-end web application for a Student Grade Reporting System. It simulates a real-world application where students can view, report, and manage their academic grades. This system addresses the issue of missing or unrecorded grades in a student's profile.

**Developer's Name:** 
Osei Frank Adams
**Developer's ID:**
11254384


## Application Structure

The application consists of 7 main pages:

- **Homepage:** Introduction to the system and its purpose.
- **Login Page:** Mock login interface for student authentication.
- **Dashboard:** Displays an overview of the student’s current grades and alerts for missing grades.
- **Grade Report:** Shows a detailed view of the student's grades filtered by semester or academic year.
- **Missing Grade Form:** Enables students to report missing grades.
- **Instructor Contact Page:** Lists instructors' contact information with a simulated email feature.
- **Help and Support:** Provides FAQs and a mock support contact form.

## Screenshots
![Home](https://github.com/Healer2003/11254384_DCIT205_ASSIGNMENT1/assets/151882972/564d346a-f85e-4138-8ef9-f05f40a7fe12)
![Login](https://github.com/Healer2003/11254384_DCIT205_ASSIGNMENT1/assets/151882972/5f39fa26-b80f-47e5-8543-3d763c626fa3)
![Dashboard1](https://github.com/Healer2003/11254384_DCIT205_ASSIGNMENT1/assets/151882972/c6bc49c7-ec3f-435f-9a03-b7834dacbd41)
![Dashboard2](https://github.com/Healer2003/11254384_DCIT205_ASSIGNMENT1/assets/151882972/2169fa9f-e972-4de3-b022-60452787a5bf)
![GradeReport](https://github.com/Healer2003/11254384_DCIT205_ASSIGNMENT1/assets/151882972/83a38ced-a436-41c5-9b33-6efbc684b9f8)
![ContactInstructor](https://github.com/Healer2003/11254384_DCIT205_ASSIGNMENT1/assets/151882972/f36586c1-1e01-45ac-9409-c11bcc76cc6c)
![MissingGrades](https://github.com/Healer2003/11254384_DCIT205_ASSIGNMENT1/assets/151882972/9f90cec7-2362-4847-9631-84eec0be997f)
![HelpandSupport1](https://github.com/Healer2003/11254384_DCIT205_ASSIGNMENT1/assets/151882972/3d56cb6f-1eb6-4408-a459-5d9b7c811c37)
![HelpandSupport2](https://github.com/Healer2003/11254384_DCIT205_ASSIGNMENT1/assets/151882972/28c36a6f-1586-4bb5-89d3-b5c2f4c9fa05)

## Technical Details

- **Framework/Technology Used:** [React]
- **Responsive Design:** Implemented using [CSS Flexbox/Grid, Bootstrap, Tailwind CSS].
- **JavaScript Functionality:** Used for form validations, dynamic content rendering, and simulating interactions.

## Setup and Installation

To set up the project locally, follow these steps:

```bash
git clone https://github.com/your-github-username/DCIT_205_ASSIGNGMENT1.git
cd repo-name
npm install
npm start
```

This will start the application on `localhost` at the default port.

## Usage

The application features a dedicated landing page where users are introduced to its functionalities through a concise overview. Positioned in the top right corner of the header is a login button, which, upon activation, directs users to the login page. Below the introductory paragraph, there is a "Get Started" button that serves the same purpose, guiding users to the login interface upon selection.

To proceed, users are required to input their student ID and password on the login page. The student ID must adhere to a length limitation of eight digits, while the password is restricted to five digits. Notably, the login page exclusively accepts numerical entries for enhanced security.

Upon successful authentication, users are seamlessly redirected to the dashboard page. The left-side navigation bar within the dashboard encompasses sections such as "Dashboard," "Grade Report," "Report Missing Grades," "Contact Instructor," and "Help and Support," providing efficient access to various functionalities.

The dashboard prominently displays the student's current grades and features an alert system for missing grades. Users can toggle this alert by interacting with the notification bell positioned on the top right corner of the page. Additionally, the "Contact Instructor" functionality enables users to access instructor contact details and send emails using the designated "Send Mail" button on the contact instructor page.

For further guidance on utilizing the application, users can explore the "Help and Support" page, which hosts additional information, guides, and support resources.

In summary, the application offers a formal and structured user experience, ensuring ease of navigation and functionality for users engaged in academic activities.

## Contribution

To contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes and push them to your branch.
4. Submit a pull request for review.

Please adhere to the project's coding standards and provide clear and detailed pull request descriptions.
