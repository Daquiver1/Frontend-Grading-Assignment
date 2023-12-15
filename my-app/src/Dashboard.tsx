import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <>
  <div>
      <h2>Computer Science University Student Dashboard</h2>

      <section>
        <h3>Courses</h3>
        <ul>
          <li>DCIT209 - Introduction to Computer Science</li>
          <li>DCIT205 - Wed Development</li>
          <li>DCIT207- Hardware Computer</li>
          <li>CBAS210 - Paragraphing</li>
          <li>MATH223 - Mathematics</li>
          <li>DCIT201- Data Structures and Algorithms</li>
        </ul>
      </section>

      <section>
        <h3>Grades</h3>
        <ul>
          <li>CBAS210: A</li>
          <li>DCIT205: B</li>
          <li>DCIT203: A</li>
          <li>DCIT207: C+</li>
          <li>DCIT201: D+</li>
          <li>MATH223: B</li>
        </ul>
      </section>

      <section>
        <h3>Announcements</h3>
        <ul>
          <li>Important Announcement: Midterm Exam Schedule</li>
          <li>Reminder: Project Submission Deadline</li>
        </ul>
      </section>

      <section>
        <h3>Resources</h3>
        <ul>
          <li>DCIT205Lecture Notes</li>
          <li>Programming IDE: Download and Installation Guide</li>
        </ul>
      </section>
    </div>

    </>
  );
};

export default Dashboard;
