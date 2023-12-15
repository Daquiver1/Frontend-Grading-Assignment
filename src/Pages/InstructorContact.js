import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import mirekuImage from '../assets/mireku.jpeg';
import pbsImage from "../assets/pbs.jpg";
import paulImage from "../assets/paulammah.jpeg";
import msImage from "../assets/ms.jpg";
import kadedziImage from "../assets/kadeziai.jpeg";
import emmaImage from "../assets/emmanuelebenezerowusu.jpg";


const instructors = [
  {
    id: 1,
    name: 'Mr Michael Soli',
    position : 'DCIT 205 Lecturer',
    email: 'michaelsoli@gmail.com',
    picture: msImage,
  },
  {
    id: 1,
    name: 'Mr Prince Boakye-Sekeyerehene',
    position : 'CBAS 210 Lecturer',
    email: 'pbs@gmail.com',
    picture: pbsImage,
  },
  {
    id: 1,
    name: 'Mr Paul Ammah',
    position : 'DCIT 201 Lecturer',
    email: 'paulammah@gmail.com',
    picture: paulImage,
  },
  {
    id: 1,
    name: 'Mr Emmanuel Owusu',
    position : 'DCIT 207 Lecturer',
    email: 'williamasiedu@gmail.com',
    picture: emmaImage,
  },
  {
    id: 1,
    name: 'Mr Kwabena Kadedzi',
    position : 'Calculus II Lecturer',
    email: 'kad@gmail.com',
    picture: kadedziImage,
  },
  {
    id: 1,
    name: 'Mr Justice Mireku',
    position : 'Math 225 Lecturer',
    email: 'justicemireku@gmail.com',
    picture: mirekuImage,
  },
 
];


  const InstructorContact = () => {

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h1 className="text-center text-3xl font-bold mb-8">Contact our Instructors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="bg-white rounded-md p-4 shadow-md">
            <img
              src={instructor.picture}
              alt={instructor.name}
              className="w-20 h-20 mx-auto mb-3 ml-[-0.1rem] rounded-full"
            />
            <h2 className="text-lg font-semibold mb-2">{instructor.name}</h2>
            <p className="text-gray-600 mb-2">{instructor.position}</p>
            <p className="text-blue-500">{instructor.email}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              onClick={() => handleSimulatedEmail(instructor.email)}
            >
              Send Email
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

const handleSimulatedEmail = (email) => {
  // Simulated email sending logic
  console.log(`Sending simulated email to ${email}`);
};

export default InstructorContact


