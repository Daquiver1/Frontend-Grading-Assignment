import React from 'react';
import './instruct.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';


const instructors = [
  { name: 'Mr. Soli Andre', phone: '+233 54 555 8456', email: 'soli@departmentname.com' },
  { name: 'Mr. Mark Attah', phone: '+233 54 777 4436', email: 'markatta@departmentname.com' },
  { name: 'Mr. Kennedy Aka', phone: '+233 54 666 8456', email: 'skenaka@departmentname.com' },
  { name: 'Mr. Paul Armah', phone: '+233 54 888 4436', email: 'paulta@departmentname.com' },
  { name: 'Mr. John Kreth', phone: '+233 54 999 8456', email: 'john@departmentname.com' },
  { name: 'Mr. Lotsi Anna', phone: '+233 54 999 4436', email: 'lotsi@departmentname.com' },
  { name: 'Mr. Katsekor'  , phone: '+233 54 000 7776', email: 'katse@departmentname.com' },
  { name: 'Mr. Affum', phone: '+233 54 111 4436', email: 'affum@departmentname.com' },



];

function Instructor() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Instructor Contact Details</h1>
        <p>Reach your lecturers here.</p>
        <section id="contact">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <h3>Department Address</h3>
            <p>University of Ghana Computer Science Department,<br />
            Legon, Ghana.</p>
            <div id="map"></div>
          </div>
        </section>
        <div className='row'>
          <div className="contact-info2">
            <h3>Contact Information</h3>
            {instructors.map((instructor, index) => (
              <div key={index}>
                <p>{instructor.name}: {instructor.phone}<br />
                Email: <a href={`mailto:${instructor.email}`}>{instructor.email}</a></p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Instructor;







