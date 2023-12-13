import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar'
import EmailModal from '../Components/EmailModal';

function Instructor() {

    const instructors = [
        {
          name: 'John Doe',
          phoneNumber: '123-456-7890',
          roomNumber: 'A101',
          email: 'john.doe@example.com',
        },
        {
          name: 'Jane Smith',
          phoneNumber: '987-654-3210',
          roomNumber: 'B203',
          email: 'jane.smith@example.com',
        },
        {
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            roomNumber: 'A101',
            email: 'john.doe@example.com',
          },
          {
            name: 'Jane Smith',
            phoneNumber: '987-654-3210',
            roomNumber: 'B203',
            email: 'jane.smith@example.com',
          },
          {
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            roomNumber: 'A101',
            email: 'john.doe@example.com',
          },
          {
            name: 'Jane Smith',
            phoneNumber: '987-654-3210',
            roomNumber: 'B203',
            email: 'jane.smith@example.com',
          },
          {
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            roomNumber: 'A101',
            email: 'john.doe@example.com',
          },
          {
            name: 'Jane Smith',
            phoneNumber: '987-654-3210',
            roomNumber: 'B203',
            email: 'jane.smith@example.com',
          },
        
      ];

      const [showModal, setShowModal] = useState(false);
      const instructorEmail = 'instructor@example.com'; 
    
      const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };



  return (
    <div>
        <Sidebar />
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-50">
                
                <h1 className='font-bold text-2xl mb-4'>Instructor Details</h1>   
                <div className="grid grid-cols-3 gap-4 bg-gray-50">
                {instructors.map((instructor, index) => (
                    <div className="items-center justify-center p-4 rounded ">
                   
                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{instructor.name}</h5>
                            </a>
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-2">Phone Number:</h2>
                                <p>{instructor.phoneNumber}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-2">Room Number:</h2>
                                <p>{instructor.roomNumber}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-2">Email:</h2>
                                <p>{instructor.email}</p>
                            </div>
                            <button onClick={openModal} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-800  focus:ring-yellow-300">
                                Send Email
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                            {showModal && (<EmailModal instructorEmail={instructorEmail} onClose={closeModal} />
                            )}
                        </div>
                   
                    </div>
                     ))}
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Instructor