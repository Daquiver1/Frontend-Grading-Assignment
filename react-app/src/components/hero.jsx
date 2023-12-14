// import Typed from 'react-typed'

const HeroSection = () => {
  return ( 
    <>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col">
          <p className="text-[#00df9a] font-bold p2">
            MONITORING WITH GrdSPAN
          </p>
          <h1 className="md:text-7xl sm:text-4xl font-bold md:py-6">
            Monitor your grades
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Excellent for grades 
            </p>
            {/* <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 uppercase"
              strings={['MONITORING ','reporting', 'and checking']}
              typeSpeed={120}
              backSpeed={140}
              loop
            /> */}
          </div>
          
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your grades to check your performance in various courses and report missing grades</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </>
   );
}
 
export default HeroSection;