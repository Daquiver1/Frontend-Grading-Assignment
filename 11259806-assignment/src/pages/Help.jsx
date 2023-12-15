import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Help = () => {
    
  return (
    <div className=" w-full mx-auto my-8 px-4">
        <div className='p-2 flex gap-2'>
            <NavLink to='/home/help' className='text-xl font-bold px-5 py-2 bg-blue-500 text-white rounded'>FAQ</NavLink>
            <NavLink to='technicalsupport' className='text-xl font-bold px-5 bg-gray-400 p-2 rounded text-white'>Contact Technical support</NavLink>
        </div>
     {/*  {faqs.map((faq, index) => (
        <div key={index} className="bg-white p-6 my-2 rounded shadow">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
            <div className="text-lg font-semibold text-blue-950">{faq.question}</div>
            <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} className="text-gray-600 text-xl" />
          </div>
          {activeIndex === index && <div className="mt-4 text-gray-500 p-2 w-[min(100%,800px)]">{faq.answer}</div>}
        </div>
      ))} */}
      <Outlet />
    </div>
  );
};

export default Help;
