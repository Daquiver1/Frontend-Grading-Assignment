import React, { useState } from 'react';
import './Missinggrade.css';

function Missinggrade() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [subjects, setSubjects] = useState('');


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!firstName || !lastName || !studentId || !email || !subjects) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', {
      firstName,
      lastName,
      studentId,
      email,
      subjects,
    });

    alert('Form submitted successfully!');

    setFirstName('');
    setLastName('');
    setStudentId('');
    setEmail('');
    setSubjects('');
  };

  return (
    <>
      <div className='b'>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <p className='missing-grade'>Missing Grade Form</p>
            <hr />
            <label className='stu-details'> Student name:</label>
            <span className="required">*</span>
            <br />
            <input
              className='box-name'
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            
            <input
              className='box-name'
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <br />
            <label className='stu-details'>Student ID:</label>
            <span className="required">*</span>
            <br />
            <input
              className='box'
              type='ID'
              placeholder='ID'
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
            <label className='stu-details'>Student Email: </label>
            <span className="required">*</span>
            <br />
            <input
              className='box'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              
            />
            <label className='stu-details'>Missing Grade Subject(s):</label>
            <span className="required">*</span>
            <br />
            <textarea
              title='Text Area'
              placeholder='Subject(s)'
              className='text-aarea'
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
              required
            />
            <button type='submit' className='Submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Missinggrade;

