// InstructorContactPage.tsx
import React from 'react';

interface Instructor {
  name: string;
  email: string;
  tel: string;
  position: string;
}

interface InstructorContactPageProps {
  instructors: Instructor[];
}

const InstructorContactPage: React.FC<InstructorContactPageProps> = ({ instructors }) => {
  // Your component logic here

  const handleEmailSimulation = (instructor: Instructor) => {
    // Simulate sending an email (you can replace this with your logic)
    console.log(`Email sent to ${instructor.name} (${instructor.email})`);
  };

  // Additional instructors
  const newInstructors: Instructor[] = [
    ...instructors,
    {
      name: 'Mr. Frans Mens',
      email: 'fransmens903@gmail.com',
      tel: '0279515882',
      position: 'System Administrator',
    },
    {
      name: 'Mr. Mohammed Nurudeen',
      email: 'nurumohad@gmail.com',
      tel: '0545975103',
      position: 'Database Administrator',
    },
    {
      name: 'Mr. Nyamekye Korsah',
      email: 'naymekos@gmail.com',
      tel: '0277865546',
      position: 'Security Analyst',
    },
  ];

  return (
    <div>
      <h2>Contact Instructors</h2>
      {/* Display a list of instructors with complete contact information */}
      <ul>
        {newInstructors.map((instructor) => (
          <li key={instructor.name}>
            <span>{`${instructor.name}: `}</span>
            <span>{`Email - ${instructor.email}, `}</span>
            <span>{`Tel - ${instructor.tel}, `}</span>
            <span>{`Position - ${instructor.position}`}</span>
            <button onClick={() => handleEmailSimulation(instructor)}>Send Email</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorContactPage;
