import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';





function Instructors() {

  const instructors = [
      {
        name: 'Owusu Ebenezer',
        phoneNumber: '0234567878',
        email: 'eben@gmail.com',
      },
      {
        name: 'Paul Amah',
        phoneNumber: '0542456455',
        email: 'amuh@hotmail.com',
      },
      {
          name: 'Michael Soli',
          phoneNumber: '0523456788',
          email: 'TheTerror@gmail.com',
        },
        {
          name: 'Myron Winston',
          phoneNumber: '0242456776',
          email: 'WinstOG@yahoo.com',
        },
        {
          name: 'Jonathatan Wick',
          phoneNumber: '054287452',
          email: 'JonathanWick@gmail.com',
        },
        {
          name: 'Linda Kotei',
          phoneNumber: '0273447326',
          email: 'LKotei21@yahoo.com',
        },
        {
          name: 'Alex James',
          phoneNumber: '0244377369',
          email: 'Cloudysw@hotmail.com',
        },
        {
          name: 'Emmanuella Martin',
          phoneNumber: '032444678',
          email: 'eMart987@gmail.com',
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
                
                <h1 className='font-bold text-2xl mb-4 text-pink-500'>Instructor Details</h1>   
                <div className="grid grid-cols-4 gap-4 bg-[#000000]">
                {instructors.map((instructor, index) => (
                    <div className="items-center justify-center p-4 rounded ">
                   
                        <div class="max-w-sm p-6 bg-pink-200 border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{instructor.name}</h5>
                            </a>
                            <div className="flex -center mb-4">
                                <h2 className="text-xl font-semibold mb-2">Phone Number:</h2>
                                <p>{instructor.phoneNumber}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-2">Email:</h2>
                                <p>{instructor.email}</p>
                            </div>
                            <button onClick={openModal} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-800  focus:ring-blue-300">
                                Send Email
                                
                            </button>
                            
                        </div>
                   
                    </div>
                     ))}
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}



export default Instructors