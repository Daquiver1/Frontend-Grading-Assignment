import React, { useState } from 'react';
import './instructor.css';
import { FaUser } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';

const Instructor = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const instructors = [
    {
      id: 1,
      name: 'John Doe',
      courseTitle: 'Web Development',
      email: 'john@example.com',
      image: 'tm1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      courseTitle: 'Data Science',
      email: 'jane@example.com',
      image: 'tm2.jpg',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      courseTitle: 'Machine Learning',
      email: 'alex@example.com',
      image: 'tm3.jpg',
    },
    {
      id: 4,
      name: 'Emily Williams',
      courseTitle: 'Mobile App Development',
      email: 'emily@example.com',
      image: 'tm4.jpg',
    },
    {
      id: 5,
      name: 'Michael Brown',
      courseTitle: 'Cybersecurity',
      email: 'michael@example.com',
      image: 'tm5.jpg',
    },
    {
      id: 6,
      name: 'Olivia Davis',
      courseTitle: 'UX/UI Design',
      email: 'olivia@example.com',
      image: 'tm6.jpg',
    },
    {
      id: 7,
      name: 'William Garcia',
      courseTitle: 'Cloud Computing',
      email: 'william@example.com',
      image: 'tm7.jpg',
    },
    {
      id: 8,
      name: 'Sophia Martinez',
      courseTitle: 'Blockchain',
      email: 'sophia@example.com',
      image: 'tm8.jpg',
    },
    {
      id: 9,
      name: 'James Rodriguez',
      courseTitle: 'Internet of Things (IoT)',
      email: 'james@example.com',
      image: 'tm9.jpg',
    },
    {
      id: 10,
      name: 'Ella Wilson',
      courseTitle: 'Digital Marketing',
      email: 'ella@example.com',
      image: 'tm10.jpg',
    },
  ];

  const handleToggle = (instructorId) => {
    setSelectedInstructor(instructorId === selectedInstructor ? null : instructorId);
  };

  return (
    <div className='instructor'>
      <h1>Instructors</h1>
      <div className='Underline'></div>
    <div className='instructors'>
      {instructors.map((instructor) => (
        <div key={instructor.id}>
          {!selectedInstructor || selectedInstructor !== instructor.id ? (
            <div className={`instructors ${instructor.id}`} onClick={() => handleToggle(instructor.id)}>
              <div className='instructor-card'>
                <img src={`../Images/${instructor.image}`} alt='.' />
                <div className='instructor-details'>
                  <h3>{instructor.name}</h3>
                  <p>{instructor.courseTitle}</p>
                  <span>{instructor.email}</span>
                  <div className='instructor-btn'>
                    <p className='active-btn'>Contact Me</p>
                    <p>View Profile</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={`contact-instructor ${instructor.id}`}>
              <h2>Contact {instructor.name}</h2>
              <img src={`../Images/${instructor.image}`} alt='.' className='img' />
              <div className='Inputs'>
                <div className='input'>
                  <FaUser size={30} />
                  <input type='text' placeholder='Student ID' />
                </div>
                <div className='input'>
                  <RiMailFill size={30} />
                  <input type='text' placeholder='Type your message here' />
                </div>
              </div>
              <button className='submit-btn'>Submit</button>
              <div className='instructor-btn'>
                <p >Contact Me</p>
                <p onClick={() => handleToggle(instructor.id)}className='active-btn'>View Profile</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Instructor;
