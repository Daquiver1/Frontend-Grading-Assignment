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
        
        <div className="flex flex-col md:flex-row items-center ">
        <img src={require('../assets/FAQs.png')} alt="FAQsimg" className='w-[43%] max-w-none h-auto mb-10 md:mr-10 md:mb-0 mt-[-18rem] ml-12'/>

        <section className="max-w-xl ml-10 mr-15 pt-20 px-4 pr-15 flex flex-col">
            <h1 className="text-center uppercase tracking-widest font-bold mb-8">
            Challenge Faqs
            </h1>

            <section className="grid grid-cols-1 gap-8">
            {cards.map((card, index) => (
                <SingleQuestion {...card} key={index} />
            ))}
            </section>
        </section>
        </div>

        

         

        <div className='flex items-center justify-center min-h-screen  m-[5rem]'>
          <div className=' flex flex-col mt-[-1rem] m-3 space-y-8 bg-white border border-gray-500 rounded-1xl md:flex-row md:space-y-0'>
            
            <div className='flex flex-col justify-center p-3 md:p-14'>
                <span className='mb-3 text-2xl font-bold text-gray-800'>For any technical support:</span>
                <span className='font-light text-gray-700 mb-8'>
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
                className='w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border
                hover:border-gray-300'>
                Submit
                </button>
            </div>
            </div>
        </div>

        <Footer/>
      </>
  )
}

export default HelpFaq



