import image1 from '../images/test.jpg';


const Herosection = () => {
   
    return (
    <div className="w-full ">
        
        <div className="main-conatiner flex md:flex-row flex-col w-full md:h-[31rem] bg-[#f39c12] ">

        <div className="left md:w-2/4 h-[21rem] md:h-full bg-white  ">
            <img className='w-full h-full' src={image1} alt="" />
        </div>

        <div className="right md:w-2/4 h-[] w-full  md:border-l-[4rem] md:border-l-white md:border-b-[31rem] md:border-b-[#f39c12] py-auto flex  justify-center">

            <div className="  font-bold md:w-[17rem] w-full uppercase md:translate-y-[180px] p-4 w-screen mx-auto">
                <h2 className='text-white  text-3xl   md:text-4xl pl-12'>Welcome to missinggrade tracker</h2>
            </div>
        </div> 

      </div>
    </div>
     );
     
}
 
export default Herosection;