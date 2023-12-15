# Student Grade Reporting System Frontend
#  Edward Koffi Hans
# ID: 11116390

## Project Overview

This project is a front-end web application for a Student Grade Reporting System. It simulates a real-world application where students can view, report, and manage their academic grades. This system addresses the issue of missing or unrecorded grades in a student's profile.

## Application Structure

The application consists of 7 main pages:

- **Homepage:** Introduction to the system and its purpose.
- **Login Page:** Mock login interface for student authentication and a Registration Page that allows new users to sign up to use the system
- **Dashboard:** Displays an overview of the student’s current grades and alerts for missing grades.
- **Grade Report:** Shows a detailed view of the student's grades filtered by semester or academic year.
- **Missing Grade Form:** Enables students to report missing grades.
- **Instructor Contact Page:** Lists instructors' contact information with a simulated email feature.
- **Help and Support:** Provides FAQs and a mock support contact form.

## Technical Details

- **Framework/Technology Used:** [React]
- **Responsive Design:** Implemented using [CSS , Bootstrap].
- **JavaScript Functionality:** Used for form validations, dynamic content rendering, and simulating interactions.

## Setup and Installation

To set up the project locally, follow these steps:

```bash
git clone https://github.com/Ed-Hans/11116390_DCIT_205_assigment1.git
cd 11116390_DCIT_205_assigment1
npm install  g create-react-app
npm  create-react-app [Name of App]
cd [Name of App]
npm start 
```

This will start the application on `localhost` at the default port.

## Usage
- To view your grades use click on the view menu on the navbar or the footer to go to the view grades page, it allows you to filter throught the Academic semester and Academic years
- To log in you will need you school ID and PIN. Go to the logging page to login. If you do not have an account, you can register and account by clicking on the link under the submit button
- To report a missing grade, there is a button on Grade Report that takes you to the missing grade page where you can access a form to logde you conplaint, this page has a section for you Email,  Course name, Instructor name, Expected grade, Explanation field.
- To contact an instructor, click on the instructors name , a section will display where you can see the instructors detail and a explanation field where you can type your message and and a button you for you to click and send your email.
- Help page contain contains Frequently Asked Questions to help solve your issue, if you do not find an answwer to your problem, there is a section where you can lodge you conplain and our technical team will respond to you
- The Dashboard contains recently uploaded grades and missing grades  



## Contribution

To contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes and push them to your branch.
4. Submit a pull request for review.

Please adhere to the project's coding standards and provide clear and detailed pull request descriptions.
