import React from 'react'

const Hero = () => {
return (
    <>
    <main>
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='md: w-[550px] text-center font-bold text-4xl sm:text-2xl md:text-3xl text-white'>Spot Missing Grades?</h1><br />
        <p className='font-semibold text-2xl text-white'>Share the details, let find it with GradeUp </p><br />
        <button className='bg-gray-500 hover:bg-white text-black font-bold py-1 px-4 rounded-full'>Get Started</button>
    </div>
    </main>
    </>
);
};

export default Hero;