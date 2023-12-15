# React Missing Grade Reporting System

The React Missing Grade Reporting System is a web application developed using React.js to empower students in tracking and reporting missing grades efficiently. The system provides a user-friendly interface with features like a dashboard overview, detailed grade reports, a form for reporting missing grades, instructor contact information, and a help and support section.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Pages](#pages)
- [Components](#components)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Missing Grade Reporting System is designed to streamline the process of tracking and reporting missing grades for students. The application is built using React.js, providing a responsive and dynamic user interface. It includes various pages for different functionalities, allowing users to view current grades, submit missing grade reports, contact instructors, and seek help and support.

## Features

- **Dashboard Overview:**
  - Provides a quick overview of current grades.
  - Alerts users about any missing grades that need attention.

- **Grade Report Details:**
  - Displays a detailed view of all courses and respective grades.
  - Allows filtering by semester or academic year for a streamlined academic history.

- **Report Missing Grades:**
  - Simple form to report missing grades.
  - Fields include course name, instructor name, expected grade, and explanation.

- **Instructor Contact:**
  - Presents a list of instructors with their contact details.
  - Simulates sending emails directly through the platform.

- **Help & Support:**
  - Comprehensive FAQ section addressing common questions about grade reporting.
  - Contact form for technical support.

## Project Structure

The project is organized into various components and pages, ensuring modularity and maintainability. Key components include Navbar, Footer, and individual pages for different features.

- **Components:**
  - `Navbar`: Navigation bar with links to different sections of the application.
  - `Footer`: Footer with system information, contact details, and quick links.

- **Pages:**
  - `LandingPage`: Welcome message, system overview, and key features.
  - `LoginPage`: Form for entering student ID and PIN with authentication logic.
  - `Dashboard`: Displays current grades and missing grades retrieved from mock API endpoints.
  - `GradeReport`: Allows filtering courses by academic year and displays a table with course details.
  - `MissingGradeForm`: Form to report missing grades with fields for course name, instructor name, expected grade, and explanation.
  - `InstructorContact`: Lists instructors with contact details and simulates sending emails.
  - `HelpAndSupport`: Features FAQ section and a contact form for technical support.

