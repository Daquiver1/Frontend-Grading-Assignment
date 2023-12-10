import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import DrImage from '../assets/images/Dr.jpeg';
import ProfImage from '../assets/images/team2.jpg'; // Add the path to the image for the second instructor
import MsImage from '../assets/images/team3.jpg'; // Add the path to the image for the third instructor
import './styles/instructor.css'; // Replace with the actual filename of your stylesheet

const InstructorsPage = () => {
  const instructors = [
    {
      name: 'Dr. Michael Agbo Tettey Soli',
      role: 'Professor of Computer Science',
      img: DrImage,
      researchInterests: ['Artificial Intelligence', 'Machine Learning'],
      teachingExpertise: ['Algorithms', 'Data Structures'],
      email: 'cdkagyapong@st.ug.edu.gh',
    },
    {
      name: 'Prof. Sarah Johnson',
      role: 'Associate Professor of Mathematics',
      img: ProfImage,
      researchInterests: ['Mathematical Modeling', 'Statistics'],
      teachingExpertise: ['Calculus', 'Linear Algebra'],
      email: 'sarah.johnson@st.ug.edu.gh',
    },
    {
      name: 'Ms. Emily Davis',
      role: 'Lecturer in Physics',
      img: MsImage,
      researchInterests: ['Quantum Mechanics', 'Optics'],
      teachingExpertise: ['Physics Fundamentals', 'Thermodynamics'],
      email: 'emily.davis@st.ug.edu.gh',
    },
    // Add more instructors as needed
  ];

  return (
    <section className="faculty-profiles">
      <h1 className="text-center mb-5">Our Distinguished Faculty</h1>
      <div className="container-1">
        {instructors.map((instructor, index) => (
          <div className="faculty-profile card" key={index}>
            <img className="faculty-profile-img" src={instructor.img} alt={`Faculty Profile ${index + 1}`} />
            <div className="faculty-profile-body">
              <h3 className="faculty-profile-title">{instructor.name}</h3>
              <p className="faculty-profile-text">{instructor.role}</p>
              <ul className="faculty-profile-list">
                <li>Research Interests: {instructor.researchInterests.join(', ')}</li>
                <li>Teaching Expertise: {instructor.teachingExpertise.join(', ')}</li>
              </ul>
              <a href={`mailto:${instructor.email}`} className="faculty-profile-btn">
                Contact {instructor.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstructorsPage;
