import React from 'react';


function Home() {
  return (
    <div>
      <header className='headerContainer'>
        <h1> Grading System</h1>
        <p>Efficiently Manage and Track Grades</p>
      </header>
      <main>
        <section className='first'>
          <h2>Features and Benefits</h2>
          <ul>
            <li>
              Grade Management: Easily create, manage, and organize grades for
              individual students or entire classes.
            </li>
            <li>
              Customizable Grading Scales: Tailor the grading scales to match
              your institution's requirements.
            </li>
            <li>
              Real-Time Updates: Stay up-to-date with student progress through
              real-time updates.
            </li>
            <li>
              Student Performance Insights: Gain valuable insights into student
              performance with our analytics and reporting features.
            </li>
            <li>
              Secure and Accessible: Rest assured that your data is secure
              within our system.
            </li>
          </ul>
        </section >
        <section className='second'>
          <h2>Why Choose Our Grading System</h2>
          <ul>
            <li>
              Seamless User Experience: Enjoy a seamless user experience with
              fast rendering and smooth interactions.
            </li>
            <li>
              Customizable and Scalable: The system is highly customizable and
              scalable to meet the needs of educational institutions of all
              sizes.
            </li>
            <li>
              Robust and Reliable: Built with React, the system provides a
              stable and reliable grading solution.
            </li>
            <li>
              Developer-Friendly: If you're a developer, you'll appreciate the
              flexibility and extensibility of React.
            </li>
          </ul>
        </section>
        <section>
          <h2>Get Started Today</h2>
          <p>
            Ready to streamline your grading process and enhance student
            evaluation? Contact us to schedule a demo or request more
            information.
          </p>
        </section>
      </main>
      <footer>
        <p>Unlock the Power of Our Grading System - Simplify, Track, and Excel!</p>
      </footer>
    </div>
  );
}

export default Home;

