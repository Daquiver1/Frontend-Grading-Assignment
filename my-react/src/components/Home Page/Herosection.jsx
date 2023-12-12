import React from "react";
import Typed from 'react-typed';

const Herosection = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen  mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          UNIVERSITY OF GHANA GRADE TRACKER
        </p>
        <h2 className="md:text-6xl sm:text-5xl text-2xl font-bold md:py-6">
          Empowering Academic Success: Navigate Your Grades, Check Your Progress.
        </h2>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl  py-4">
            Check your
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['grades', 'transcript', 'missing grades']}
            typeSpeed={130}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Sign Up to moniter your report and search for your missing grades .</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Sign Up</button>
        
      </div>
    </div>
  );
}

export default Herosection;
