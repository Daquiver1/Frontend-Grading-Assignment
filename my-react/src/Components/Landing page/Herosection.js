import image1 from '../images/test.jpg';


const Herosection = () => {
   
    return (
    <div className="w-full top-0">
        
        <div className="main-conatiner  flex w-full h-[38rem]  ">
        <div className="left w-2/4 h-100 my-20 bg-white border-l-[4rem] border-l-white border-b-[31rem] border-b-white py-auto   justify-center  ">
            <img className='w-50 h-90 px-4 ' src={image1} alt="" />
        </div>

        <div className="right w-2/4 h-[]  border-l-[4rem] border-l-white border-b-[31rem] border-b-[#f39c12] py-auto flex  items-center justify-center">

            <div className=" text-5xl font-bold w-[17rem]  flex  uppercase items-center  translate-y-[180px] p-7">
                <h2 className='text-black  p-4 '>Welcome to missinggrade tracker</h2>
            </div>
        </div> 

      </div>
    </div>
     );
     
}
 
export default Herosection;