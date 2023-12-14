import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Dashboard = () => {
  const [students, setStudents] = useState({
    CBAS210: { grade: 'A', missing: false, percentage: 90 },
    DCIT201: { grade: 'B', missing: false, percentage: 80 },
    DCIT205: { grade: 'C', missing: true, percentage: 70 },
    DCIT207: { grade: 'A', missing: false, percentage: 95 },
    DCIT209: { grade: 'B', missing: true, percentage: 85 },
    DCIT203: { grade: 'A', missing: false, percentage: 92 },
  });

  const calculateOverallGrade = () => {
    const grades = Object.values(students).map((student) => student.percentage);
    const overallGrade =
      grades.reduce((sum, percentage) => sum + parseInt(percentage), 0) / grades.length;
    return overallGrade.toFixed(2);
  };

  const calculateGPA = (percentage) => {
    if (percentage >= 90) {
      return 'A (4.0)';
    } else if (percentage >= 80) {
      return 'B (3.0)';
    } else if (percentage >= 70) {
      return 'C (2.0)';
    } else {
      return 'F (0.0)';
    }
  };

  const suggestions = () => {
    return [
      'Create a study schedule and stick to it consistently.',
      'Join study groups to discuss course materials and solve problems collaboratively.',
      'Seek help from professors or tutors for topics you find challenging.',
      'Practice coding regularly to improve your programming skills.',
      'Utilize online platforms for additional learning resources and tutorials.',
      'Take breaks and prioritize self-care to maintain a healthy balance.',
    ];
  };

  const weaknessesGuidance = () => {
    return 'Identify specific topics or skills in your courses where you struggle. Allocate dedicated time to practice and seek additional resources for improvement.';
  };

  const resources = [
    { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', link: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882' },
    { title: 'Cracking the Coding Interview: 189 Programming Questions and Solutions', link: 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850' },
    { title: 'Code Complete: A Practical Handbook of Software Construction', link: 'https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670' },
    { title: 'Khan Academy - Computer Science', link: 'https://www.khanacademy.org/computing' },
    { title: 'Coursera - Online Courses in Computer Science', link: 'https://www.coursera.org/' },
    { title: 'GitHub Learning Lab', link: 'https://lab.github.com/' },
  ];

  const highlightStrengthsAndWeaknesses = () => {
    const strengths = [];
    const weaknesses = [];

    Object.entries(students).forEach(([course, { grade, percentage }]) => {
      if (grade === 'A') {
        strengths.push(course);
      } else if (grade === 'C') {
        weaknesses.push(course);
      }
    });

    return {
      strengths,
      weaknesses,
    };
  };

  const strengthsAndWeaknesses = highlightStrengthsAndWeaknesses();

  return (
    <div>
      <Navbar />
      <div className="Dashboard">
        <h1 className="dashboard-heading" style={{ color: '#35d8f1' }}>
          Student Dashboard
        </h1>

        <div className="overview">
          <h2 style={{ color: '#35d8f1' }}>Overview</h2>
          <p>Overall Grade: {calculateOverallGrade()}%</p>
          <ul>
            {Object.entries(students).map(([course, { grade, missing, percentage }]) => (
              <li key={course}>
                <strong style={{ color: grade === 'A' ? 'green' : grade === 'B' ? '#35d8f1' : 'orange' }}>
                  {course}:
                </strong> {grade} (Percentage: {percentage}%)
                {missing && (
                  <span className="missing-alert"> (Missing Grade)</span>
                )}
                {' GPA: '}
                <strong style={{ color: grade === 'A' ? 'green' : grade === 'B' ? '#35d8f1' : 'orange' }}>
                  {calculateGPA(percentage)}
                </strong>
              </li>
            ))}
          </ul>
        </div>

        <div className="suggestions">
          <h2 style={{ color: '#35d8f1' }}>Suggestions</h2>
          <ul>
            {suggestions().map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>

        <div className="weaknesses-guidance">
          <h2 style={{ color: '#35d8f1' }}>Working on Weaknesses</h2>
          <p>{weaknessesGuidance()}</p>
        </div>

        <div className="resources">
          <h2 style={{ color: '#35d8f1' }}>Resources</h2>
          <ul>
            {resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="strengths-weaknesses">
          <h2 style={{ color: '#35d8f1' }}>Strengths and Weaknesses</h2>
          <p>
            <strong>Strengths:</strong> {strengthsAndWeaknesses.strengths.join(', ')}
          </p>
          <p>
            <strong>Weaknesses:</strong> {strengthsAndWeaknesses.weaknesses.join(', ')}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
