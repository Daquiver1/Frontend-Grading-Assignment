
//  import Navbar from "../components/Navbar";



export default function  Home () {
    return (
    //     <>
    //   <Navbar />
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='md: w-[550px] text-center font-bold text-4xl sm:text-2xl md:text-3xl text-blue-700'>Spot Missing Grades?</h1><br />
            <p className='font-semibold text-2xl text-blue-700'>Share the details, and we'll help sort it out for you with GradeUp </p><br />
         <button className='bg-gray-500 hover:bg-white text-black font-bold py-1 px-4 rounded-full'>Get Started</button>
        </div>
        // </>
    );
};