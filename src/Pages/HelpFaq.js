
import React, { useState } from "react";
import { questions } from "../Components/questions";
import SingleQuestion from "../Components/SingleQuestion";

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const HelpFaq = () => {
  const [cards] = useState(questions);

  return (
    <>
      <Navbar/>
      {/* This pulls together the components called to form the Help and Support Page. */}
      
      <div className="flex flex-col items-center">
        <img src={require('../assets/FAQs.png')} alt="FAQsimg" className='w-[80%] max-w-none h-auto mb-6 md:w-[43%] md:mr-10'/>

        <section className="max-w-xl mt-5 px-4 flex flex-col">
          <h1 className="text-center uppercase tracking-widest font-bold mb-8">
            Challenge Faqs
          </h1>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {cards.map((card, index) => (
              <SingleQuestion {...card} key={index} />
            ))}
          </section>
        </section>
      </div>

      <div className='flex items-center justify-center min-h-screen m-5'>
        <div className='flex flex-col m-3 space-y-8 bg-white border border-gray-500 rounded-1xl md:flex-row md:space-y-0'>
          
          {/* This is the technical support form. */}
          
          <div className='flex flex-col justify-center p-3 md:p-10'>
            <span className='mb-3 text-xl font-bold text-gray-800'>For any technical support:</span>
            <span className='font-light text-gray-700 mb-4'>
              State the issue or problem in the field below
            </span>

            <div>
              <textarea
                type='text'
                name='explanation'
                id='explanation'
                className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
              />
            </div>
        
            <button
              className='w-full bg-black text-white p-2 rounded-lg mt-4 hover:bg-white hover:text-black hover:border hover:border-gray-300'>
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default HelpFaq;




