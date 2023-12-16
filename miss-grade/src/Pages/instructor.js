import React, { useState } from 'react';
import SideBar from '../Components/SideBar'
import EmailModal from '../Components/EmailModal';

function Instructor() {

    const instructors = [
        {
          name: 'Owusu Ebenezer',
          email: 'eben@example.com',
        },
        {
          name: 'Paul Amah',
          email: 'amuh@example.com',
        },
        {
            name: 'Michael Soli',
            email: 'michael@example.com',
          },
          {
            name: 'Kingley Osei',
            email: 'oseiking@example.com',
          },
          {
            name: 'Solomon Mensah',
            email: 'solo@example.com',
          },
          {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
          },
          {
            name: 'Peter Walker',
            email: 'john.doe@example.com',
          },
          {
            name: 'John Lord',
            email: 'johh@example.com',
          },
          {
            name: 'Owusu Ebenezer',
            email: 'eben@example.com',
          },
          {
            name: 'Paul Amah',
            email: 'amuh@example.com',
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
            <div className="p-4">
                
                <h1 className='font-bold text-2xl mb-4'>instructors Contact</h1>   
                <div className="grid grid-cols-2 gap-4 bg-gray-50">
                {instructors.map((instructor, index) => (
                    <div className="items-center justify-center p-4 rounded ">
                        
                   
                        <div class="max-w-sm p-6 bg-gray-50 border border-gray-200 text-center rounded-lg shadow">
                          <div className='items-center w-8 bg-blue-100'>

                          </div>
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{instructor.name}</h5>
                            </a>
                           
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-2">{instructor.email}</h2>
                                
                            </div>
                            <button onClick={openModal} href="#" class="inline-flex items-center px-12 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800">
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