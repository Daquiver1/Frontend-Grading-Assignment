import React from 'react';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpeg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';

const AppInstructorContact = () => {
  const instructors = [
    {
      id: 1,
      name: 'Micheal Agbo Tettey Soli',
      role: 'Senior Software Engineer, PhD Candidate, Co-Founder',
      phone: '+233-540-710-554',
      email: 'michealsoli@ug.edu.gh',
      image: pic1,
    },
    {
      id: 2,
      name: 'Dwumfour Abdullai Abdul-Aziz',
      role: 'Lecturer, CEO of zizi foundation',
      phone: '+233-260-541-219',
      email: 'adwumfour@ug.edu.gh',
      image: pic2,
    },
    {
      id: 3,
      name: 'Dr. Edward Ansong',
      role: 'Senior Lecturer',
      phone: '+233-243-186-884',
      email: 'edansong@ug.edu.gh',
      image: pic3,
    },
    {
      id: 4,
      name: 'Dr. Jamal',
      role: 'Lecturer',
      phone: '+233-263-186-874',
      email: 'jamal@ug.edu.gh',
      image: pic4,
    },
    {
      id: 5,
      name: 'Mark Attah',
      role: 'Computer Science Lecturer',
      phone: '+233-208-603-871',
      email: 'mamensah@ug.edu.gh',
      image: pic5,
    },
    {
      id: 6,
      name: 'Dr. Justice Kwame Appati',
      role: 'Senior Lecturer',
      phone: '+233-243-183-862',
      email: 'adwumfour@ug.edu.gh',
      image: pic6,
    },
    {
      id: 7,
      name: 'Dr. Wiafe',
      role: 'Lecturer',
      phone: '+233-243-189-834',
      email: 'dadwumfour@ug.edu.gh',
      image: pic7,
    },
    {
      id: 8,
      name: 'Prof. Ferdinard Katsriku',
      role: 'Associate Prof. of Computer Science, UG',
      phone: '+233-243-786-213',
      email: 'ferdkatsriku@ug.edu.gh',
      image: pic8,
    },
    // Add more instructors as needed
  ];

  const handleEmailClick = (email) => {
    alert(`Opening email client for ${email}`);
  };

  return (
    <div>
      <h2>Instructor Contact List</h2>
      <hr />
      <br />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {instructors.map((instructor) => (
          <div key={instructor.id} style={{ marginBottom: '20px' }}>
            <img
              src={instructor.image}
              alt={instructor.name}
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
            />
            <div>
              <h3>{instructor.name}</h3>
              <p>{instructor.role}</p>
              <p>Phone: {instructor.phone}</p>
              <p>Email: {instructor.email}</p>
              <button onClick={() => handleEmailClick(instructor.email)}>
                Send Email
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppInstructorContact;










