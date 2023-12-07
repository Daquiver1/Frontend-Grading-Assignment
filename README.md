# Student Grade Reporting System Frontend - Kwabena Owusu-Darko (11170189)

## Project Overview

This project is a front-end web application for a Student Grade Reporting System called GradeRepo. It simulates a real-world application where students can view, report, and manage their academic grades. This system addresses the issue of missing or unrecorded grades in a student's profile.

## Application Structure

The application consists of 7 main pages:

- **Homepage:** Introduction to the system and its purpose.
- **Login Page:** A mock login interface for student authentication.
- **Dashboard:** Displays an overview of the student’s current grades and alerts for missing grades.
- **Grade Report:** Shows a detailed view of the student's grades filtered by semester or academic year.
- **Missing Grade Form:** Enables students to report missing grades.
- **Instructor Contact Page:** Lists instructors' contact information with a simulated email feature.
- **Help and Support:** Provides FAQs and a mock support contact form.

## Technical Details

- **Framework/Technology Used:** React
- **Responsive Design:** Implemented using CSS Flexbox/Grid and Tailwind CSS.
- **JavaScript Functionality:** Used for form validations, dynamic content rendering, and simulating interactions.

## Setup and Installation

To set up the project locally, follow these steps:

```bash
git clone https://github.com/kodditor/Frontend-Grading-Assignment.git
cd assignment-1
npm install
npm start
```

This will start the application on `localhost` at the default port, 3000.

## Usage

The app welcomes you with a hero section indicating its goal and giving you a peek of its interface. The Navbar gives you access to all seven pages in the app, while focusing on a call-to-action to login.

![Homepage 1](/assets/homepage.PNG)
![Dashboard 2](/assets/homepage-2.PNG)

![Mobile Dashboard 1](/assets/homepage-mobile-1.PNG)

Once on the login page, you can enter your Student ID and Student Pin, but make sure to enter valid inputs, since the client-side form validation enforces the pattern attribute in each input.

![Login](/assets/login.PNG)

![Login Mobile](/assets/login-mobile.PNG)

Completing the login redirects you to the dashboard, where you have a brief view of all completed and missing grades, with an option to open the 'My Grades' page to have a detailed view of the grades.

![Dashboard 1](/assets/dashboard-1.PNG)
![Dashboard 2](/assets/dashboard-2.PNG)

![Mobile Dashboard 1](/assets/dashboard-mobile-1.PNG)


The 'My grades' page shows the course ID, title, semester, academic year and grade attained for each course. While also providing details of any grades missing.

![My Grades 1](/assets/grades-1.PNG)
![My Grades 2](/assets/grades-2.PNG)

![My Grades Mobile 1](/assets/grades-mobile-1.PNG)
![My Grades Mobile 2](/assets/grades-mobile-1.PNG)


The 'Report Grade' page features a form that allows you to report any missing grades, but requires you to input the course details and a reasonable explanation before submission.

![Report Missing Grades](/assets/report-1.PNG)

![Report Missing Grades Mobile](/assets/report-mobile.PNG)


The 'Instructors' page features the details of various course instructors, and provides a simple dialog to contact the lecturer with a message without revealing the lecturer's email, which is assumed to be private.

![Instructors](/assets/instructors.PNG)

![Instructors Mobile](/assets/instructors-mobile.PNG)


The 'Help' Page features frequently asked questions (AI generated) and a contact form to send a message to the webmaster.
 
![Help 1](/assets/faq.PNG)
![Help 1](/assets/faq-2.PNG)

![Help 1](/assets/faq-mobile.PNG)
![Help 1](/assets/faq-mobile-2.PNG)
