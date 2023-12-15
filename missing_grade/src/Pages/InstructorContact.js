import React from 'react';
import './Styles/contact.css'

const InstructorContact = () => {
  return (
    <div className='contact'>
      <h2>Instructor Contact</h2>
      <p>
        For any questions or concerns regarding your grades, please contact
        your instructor or the academic administration.
      </p>
      <div className='contactcontainer'>
        <div className='contact1'>
            <h3>Prof. Katsriku</h3>
            <p>Located at the Computer Science Department RIPS Building first floor Room 36.</p>
            <p><a href='mailto: Email: dcs@ug.edu.gh'>pkatsriku@gmail.com</a></p>
            <p><a href='tel: Phone: +233 50 138 2035'>0554322987</a></p>
        </div>
        <div className='contact2'>
            <h3>Mr. Abdullai Aziz</h3>
            <p>Located at the Computer Science Department RIPS Building first floor Room 40.</p>
            <p><a href='mailto: Email: dcs@ug.edu.gh'>aaziz@gmail.com</a></p>
            <p><a href='tel: Phone: +233 50 138 2035'>0567822987</a></p>
        </div>
        <div className='contact3'>
            <h3>Mr. Michael Soli</h3>
            <p>Located at the Computer Science Department RIPS Building first floor Room 10.</p>
            <p><a href='mailto: Email: dcs@ug.edu.gh'>msoli@gmail.com</a></p>
            <p><a href='tel: Phone: +233 50 138 2035'>050932987</a></p>
        </div>
        <div className='contact4'>
            <h3>Mr. Mark Atta</h3>
            <p>Located at the Computer Science Department RIPS Building first floor Room 10.</p>
            <p><a href='mailto: Email: dcs@ug.edu.gh'>matta@gmail.com</a></p>
            <p><a href='tel: Phone: +233 50 138 2035'>0554322987</a></p>
        </div>
      </div>
    </div>
  );
};

export default InstructorContact;