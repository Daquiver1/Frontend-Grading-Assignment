# Student Grade Reporting System Frontend

## Project Overview

This project is a front-end web application for a Student Grade Reporting System. It simulates a real-world application where students can view, report, and manage their academic grades. This system addresses the issue of missing or unrecorded grades in a student's profile.

**Developer's Name: Joseph Acheampong**
**Developer's ID: 11252709**

## Application Structure

The application consists of 7 main pages:

- **Homepage:** Introduction to the system and its purpose.
- **Login Page:** Mock login interface for student authentication.
- **Dashboard:** Displays an overview of the student’s current grades and alerts for missing grades.
- **Grade Report:** Shows a detailed view of the student's grades filtered by semester or academic year.
- **Missing Grade Form:** Enables students to report missing grades.
- **Instructor Contact Page:** Lists instructors' contact information with a simulated email feature.
- **Help and Support:** Provides FAQs and a mock support contact form.

-**Homepage**
<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/5de189c9-aa8b-4be9-84d6-ad71b59aa5f2">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/f07d0532-a7e8-4a7f-a90d-cd24c4033d88">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/c43b3fab-30bc-49e7-96ae-647741c22aa9">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/52de6099-e520-4734-aed9-9cdb9ee95691">

**Login page**
<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/ece34d0b-6272-4797-a60e-7e7189c55aa0">

**Dashboard**
<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/323cfb8f-d6f9-48cb-bb7b-835161fdaf94">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/78ab4915-5461-4c93-b6ed-88418821f1fa">

**Grade Report**
<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/20b2f0e3-3754-4b32-b3e4-a1fde082b8ff">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/6101e410-6127-4256-a534-2ff3c4ccc76c">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/a96395d9-a0fb-453a-afa3-57c6cda48bad">

**Missing Grade Form**
<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/a2a3dd3b-2bf9-4de9-b56c-cfe4474793d0">

**Instructor Contact Page**
<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/f737ecc8-9fde-4081-a15d-00e12c2e1f53">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/400f9a6f-dffe-4e6e-9b78-3757fd6e7ee8">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/ff051d0e-3da9-491a-9d51-165230c556d8">

**Help and Support**
<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/aa116ab2-c1e1-4d30-8a8f-56f2c988a1bc">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/bf80bbb4-33a1-47df-8746-9c8273e69476">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/faa59bd7-aa83-4556-b31d-854d0b97c3d0">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/6fa9bd14-9772-466c-b12b-b3228ef86604">

<img width="960" alt="image" src="https://github.com/Joeboy77/11252709_DCIT205_Assignment1/assets/136011166/d54b31db-5ed3-44d6-b534-155ed1040321">


## Technical Details

- **Framework/Technology Used:** [React]
- **Responsive Design:** Implemented using [CSS Flexbox/Grid, Bootstrap, Tailwind CSS].
- **JavaScript Functionality:** Used for form validations, dynamic content rendering, and simulating interactions.

## Setup and Installation

To set up the project locally, follow these steps:

```bash
git clone https://github.com/your-github-joe77/DCIT_205_ASSIGNGMENT1.git
cd repo-name
npm install
npm start
```

This will start the application on `localhost` at the default port.

## Usage

When a user access the website, there is a landing page also the home page which consist of hearder, side bar and footer.
Within the body, there is a button (Get Started). This button serves as a link to the login page. The user will have to input his student id and password. The student id is limited to a length of eight whiles the password is five. The login page only accepts numbers. After autentication is done, the user is then directed to the dashboard page. The dashboard page consist of the student profile, alert on missing grades and the student current grade. The student profile has the student name, id, program and profile picture.
On the side bar there is view grade which when clicked, displays the student entire grades. It also has a filter for filtering either by academic year or semester.
Student or users can also use the contact instructors to access their instructors contact and can also send a mail thourgh the send mail button.
The missing grade form os the side bar is used to access a form that can be filled when a student or user has a missing grade issue.


## Contribution

To contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes and push them to your branch.
4. Submit a pull request for review.

Please adhere to the project's coding standards and provide clear and detailed pull request descriptions.
