import React, { useState } from 'react';
import SideBar from '../Components/SideBar'
import EmailModal from '../Components/EmailModal';

function Instructor() {

    const instructors = [
        {
          name: 'Owusu Ebenezer',
          phoneNumber: '0234567878',
          email: 'eben@example.com',
        },
        {
          name: 'Paul Amah',
          phoneNumber: '0542456455',
          email: 'amuh@example.com',
        },
        {
            name: 'Michael Soli',
            phoneNumber: '0523456788',
            email: 'michael@example.com',
          },
          {
            name: 'Kingley Osei',
            phoneNumber: '0242456776',
            email: 'oseiking@example.com',
          },
          {
            name: 'Solomon Mensah',
            phoneNumber: '0542987452',
            email: 'solo@example.com',
          },
          {
            name: 'Jane Smith',
            phoneNumber: '987-654-3210',
            email: 'jane.smith@example.com',
          },
          {
            name: 'Peter Walker',
            phoneNumber: '054078 72890',
            email: 'john.doe@example.com',
          },
          {
            name: 'John Lord',
            phoneNumber: '0234567878',
            email: 'johh@example.com',
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
        <SideBar />
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-50">
                
                <h1 className='font-bold text-2xl mb-4'>Instructor Details</h1>   
                <div className="grid grid-cols-4 gap-4 bg-gray-50">
                {instructors.map((instructor, index) => (
                    <div className="items-center justify-center p-4 rounded ">
                   
                        <div class="max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{instructor.name}</h5>
                            </a>
                            <div className="flex -center mb-4">
                                <h2 className="text-xl font-semibold mb-2">{instructor.phoneNumber}</h2>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-2">{instructor.email}</h2>
                                
                            </div>
                            <button onClick={openModal} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-yellow-800  focus:ring-blue-300">
                                Send a email
                                
                            </button>
                            {showModal && (
                                <EmailModal instructorEmail={instructorEmail} onClose={closeModal} />
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