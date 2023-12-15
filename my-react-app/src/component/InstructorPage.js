import React, { useState, useEffect } from 'react';
import './InstructorPage.css';
import MainHeader from './MainHeader';
import Footer from './Footer';


const InsructorPage = () => {
    const [Instructors, setInstructors] = useState([
        { id: 1,  name: 'Introduction to Computer Science', contact: '0558522254', email: 'kjjhgdhd@st.edu.gh' },
        { id: 1,  name: 'Introduction to Computer Science', contact: '0558522254', email: 'kjjhgdhd@st.edu.gh' },,
        { id: 1,  name: 'Introduction to Computer Science', contact: '0558522254', email: 'kjjhgdhd@st.edu.gh' },,
        { id: 1,  name: 'Introduction to Computer Science', contact: '0558522254', email: 'kjjhgdhd@st.edu.gh' },,
        { id: 1,  name: 'Introduction to Computer Science', contact: '0558522254', email: 'kjjhgdhd@st.edu.gh' },,
        { id: 1,  name: 'Introduction to Computer Science', contact: '0558522254', email: 'kjjhgdhd@st.edu.gh' },,
        { id: 1,  name: 'Introduction to Computer Science', contact: '0558522254', email: 'kjjhgdhd@st.edu.gh' },,
        { id: 1,  name: 'Introduction to Computer Science', contact: '0558522254', email: 'kjjhgdhd@st.edu.gh' }
      
        // Add more courses as needed
      ]);
      useEffect(() => {
        // Fetch enrolled courses data from the server here if needed
      }, []);

      const handleClick = () => {
        alert('Sent Message Successfully!!');
      };

  return (
    <div>
        <MainHeader />
        <div className='ins-div'>
            <h1 className="dashTitle">Instructors</h1>
            <table>
                <thead className='thead'>
                    <tr>
                        <th>Instructor Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
            {Instructors.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.contact}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
            </table>

            <div className='Instructor-table'>
                <input type='text' placeholder='Enter Lecturer Name' className='lec-input'></input><br/>
                <input type='text' placeholder='Subject' className='lec-input'></input><br/>
                <label htmlFor='textArea' className='lec-tArea'>Message</label>
                <textarea></textarea>
                <button onClick={handleClick} className='Send-button'>Send Message</button>


            </div>
        </div>
        <Footer />
    </div>
  );
};

export default InsructorPage;