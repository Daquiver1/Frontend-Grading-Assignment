import React from 'react';
import comScienceLogo from './comScience_logo.png';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <header>
  <nav>
    <ul className="navbar flex">
      <li><a href="#" className="px-4 py-2 text-indigo-600">Home</a></li>
      <li><a href="login" className="px-4 py-2 text-indigo-600">Login</a></li>
      <li><a href="Dashboard" className="px-4 py-2 text-indigo-600">Dashboard</a></li>
      <li><a href="grade-report" className="px-4 py-2 text-indigo-600">Grade Report</a></li>
      <li><a href="missing-grade-form" className="px-4 py-2 text-indigo-600">Missing Grade Form</a></li>
      <li><a href="instructor-contact" className="px-4 py-2 text-indigo-600">Instructor Contact</a></li>
      <li><a href="help-support" className="px-4 py-2 text-indigo-600">Help and Support</a></li>
    </ul>
  </nav>

      </header>

      <main className="flex flex-col items-center justify-center py-8">
        <section className="sidebar bg-white rounded-md p-4 text-center">
          <b className="text-xl">CHECK YOUR GRADES!</b> <br />
          WITH OUR MISSING GRADE REPORTING SYSTEM YOUR GRADES WILL ALWAYS REMAIN INTACT!
        </section>

        <section className="content max-w-3xl mx-auto mt-8 px-4">
          <h1 className="text-3xl font-bold mb-4">Missing Grade Reporting System by the11112468 Company</h1>
          <p className="text-lg">
            Welcome to our Missing Grade Reporting System!<br />
            Our platform is designed to support students in tracking and reporting any missing grades that might not appear in their academic profiles.<br />
            Our primary goal is to provide an interactive and user-friendly interface that empowers students to effortlessly access their grades,<br />
            report missing ones, and communicate effectively with their instructors or academic administration.<br /><br />
            <b>HERE ARE SOME FEATURES:</b><br /><br />
            <b>Grade Tracking:</b> Gain easy access to your grades. View a comprehensive overview of your academic performance in one convenient location.<br />
            <b>Missing Grade Reporting:</b> Report any missing grades directly through our system. Streamline the process of ensuring that all your academic accomplishments are accurately recorded.<br />
            <b>User-Friendly Interface:</b> Navigate through the platform effortlessly. Our intuitive design makes it simple for students to interact with their academic information.<br />
            <b>Communication Bridge:</b> Connect with instructors or academic administrators. Our system facilitates efficient communication channels, allowing you to address any concerns regarding missing grades promptly.<br /><br />
            At our Missing Grade Reporting System, we are dedicated to enhancing your academic journey by providing a tool that empowers you to take charge of your academic record. Join us and stay on top of your grades effortlessly!
          </p>
          <img src={comScienceLogo} alt="Image" className="mt-8 mx-auto" />
        </section>
      </main>

      <footer className="text-center py-4">
        <p>&copy; 2023 Missing Grade Reporting System by the 11112468Company</p>
      </footer>
    </div>
  );
}

export default HomePage;