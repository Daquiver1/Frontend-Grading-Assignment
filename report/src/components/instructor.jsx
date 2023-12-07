import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles


const InstructorsPage = () => {
  
  const instructors = [
    {
      name: 'Dr. Michael Agbo Tettey Soli',
      role: 'Professor of Computer Science',
      imgSrc: '../assets/images/Dr.jpeg',
      researchInterests: ['Artificial Intelligence', 'Machine Learning'],
      teachingExpertise: ['Algorithms', 'Data Structures'],
      email: 'cdkagyapong@st.ug.edu.gh',
    },
    // Add more instructors as needed
  ];

  return (
    <section className="faculty-profiles">
      <h1 className="text-center mb-5">Our Distinguished Faculty</h1>
      {instructors.map((instructor, index) => (
        <div className="faculty-profile card" key={index}>
          <img className="card-img-top" src={instructor.imageSrc} alt={`Faculty Profile ${index + 1}`} />
          <div className="card-body">
            <h3 className="card-title">{instructor.name}</h3>
            <p className="card-text">{instructor.role}</p>
            <ul className="list-unstyled">
              <li>Research Interests: {instructor.researchInterests.join(', ')}</li>
              <li>Teaching Expertise: {instructor.teachingExpertise.join(', ')}</li>
            </ul>
            <a href={`mailto:${instructor.email}`} className="btn btn-primary">
              Contact {instructor.name}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InstructorsPage;
