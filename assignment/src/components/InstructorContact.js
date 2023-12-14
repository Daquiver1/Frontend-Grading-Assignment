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
      name: 'John Doe',
      role: 'Full Stack Developer',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      image: pic1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Frontend Developer',
      phone: '987-654-3210',
      email: 'jane.smith@example.com',
      image: pic2,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      role: 'Backend Developer',
      phone: '555-123-4567',
      email: 'bob.johnson@example.com',
      image: pic3,
    },
    {
      id: 4,
      name: 'Alice Williams',
      role: 'UX Designer',
      phone: '111-222-3333',
      email: 'alice.williams@example.com',
      image: pic4,
    },
    {
      id: 5,
      name: 'Charlie Brown',
      role: 'Data Scientist',
      phone: '444-555-6666',
      email: 'charlie.brown@example.com',
      image: pic5,
    },
    {
      id: 6,
      name: 'Eva Martinez',
      role: 'Mobile App Developer',
      phone: '666-777-8888',
      email: 'eva.martinez@example.com',
      image: pic6,
    },
    {
      id: 7,
      name: 'David Kim',
      role: 'DevOps Engineer',
      phone: '222-333-4444',
      email: 'david.kim@example.com',
      image: pic7,
    },
    {
      id: 8,
      name: 'Sophie Anderson',
      role: 'Product Manager',
      phone: '999-888-7777',
      email: 'sophie.anderson@example.com',
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










