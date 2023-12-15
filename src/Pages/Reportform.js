import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

//This is the page that allows a student to submit a form to report a missing grade. 

const Reportform = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // For now, just toggle the confirmation message
    setIsSubmitted(!isSubmitted);
  };

  return (
    <div>
      <Navbar />

      <div className='flex items-center justify-center min-h-screen  m-[10rem]'>
        <div className=' flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-1xl md:flex-row md:space-y-0'>
          <div className='flex flex-col justify-center p-8 md:p-14 mt-11'>
            <span className='mb-3 text-4xl font-bold text-gray-800'>Missing Grade Form</span>
            <span className='font-light text-gray-400 mb-8'>
              This is a form to report a missing grade. Fill out the following fields:
            </span>
            <div className='py-4'>
              <span className='mb-2 text-md font-semibold'>Course Name</span>
              <input
                type='text'
                className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
                name='coursename'
                id='coursename'
              />
            </div>
            <div className='py-4'>
                <span className='mb-2 text-md font-semibold'>Instructor Name</span>
                   <input
                    type='text'
                    name='instructorname'
                     id='instructorname'
                     className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
                 />
                 </div>

                 <div className='py-4'>
                 <span className='mb-2 text-md font-semibold'>Expected Grade</span>
                 <input
                     type='text'
                     name='expectedgrade'
                     id='expectedgrade'
                     className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
                 />
                 </div>

                 <div className='py-4'>
                 <span className='mb-2 text-md font-semibold'>Explanation Field</span>
                 <textarea
                     type='text'
                     name='explanation'
                     id='explanation'
                     className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
                 />
                 </div>

   
            <div className='py-4'>
              <button
                onClick={handleSubmit}
                className='w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300'
              >
                Submit
              </button>
            </div>

            {isSubmitted && (
              <div className='text-green-500 mt-4'>
                Thank you for your submission! This is a confirmation message.
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reportform