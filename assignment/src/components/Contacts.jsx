import Footer from "./Footer";
const Contact = () => {


    return(
      <>
        <div className= "pt-[85px]">
              <div className="pl-5 ">
                <h1 className="font-bold text-2xl text-blue-700">Instructor Contact Page</h1>
              <h2 className="font-semibold text-xl">Contact Us</h2>
              <p className="font-sans text-xl">To report a missing grade or notify an instructor about an update on a missing grade, please reach out via one of the means below.You can alternatively send a direct email to the instructor by clicking on the "<span className="font-semibold">Send Email</span>" button.</p>
              </div>
       
        </div>

        <div className="flex flex-row justify-between">

        <div className=" flex flex-col bg-gray-300 hover:bg-green-200 duration-75 cursor-pointer text-blue-700 font-sans text-semibold rounded-lg shadow-xl min-h-[50px] ml-5 mt-10">
      <ul className="font-bold p-[15px] align-middle">
        <li className="text-center">DCIT 201</li>
        <li>Instructor: <span className="text-black">Mr.Peter Armah</span></li>
        <li>Email: <span className="text-black">parmah54@gmail.com </span> </li>
        <li>Tel: <span className="text-black">(+233) 248-147-225 </span> </li>
      </ul>

      <button onClick={() => window.location.href='mailto:parmah54@gmail.com'}  className="bg-blue-700 text-white font-semibold text-center rounded hover:bg-white hover:text-blue-700">
        Send Email</button>
     
        </div>

        <div className="flex flex-col bg-gray-300 text-blue-700  hover:bg-green-200 duration-75 cursor-pointer font-sans text-semibold rounded-lg shadow-xl min-h-[50px] mt-10 ml-5">
        <ul className="font-bold p-[15px] align-middle">
        <li className="text-center">DCIT 203</li>
        <li>Instructor: <span className="text-black">Mr.Abdullai Aziz</span></li>
        <li>Email: <span className="text-black">dwumfour22@gmail.com </span> </li>
        <li>Tel: <span className="text-black">(+233) 530-242-985 </span> </li>
      </ul>

      
      <button onClick={() => window.location.href='mailto:dwumfour22@gmail.com'}  className="bg-blue-700 text-white font-semibold text-center rounded hover:bg-white hover:text-blue-700">
        Send Email</button>
     
        </div>

        <div className="flex flex-col bg-gray-300 text-blue-700  hover:bg-green-200 duration-75 cursor-pointer font-sans text-semibold rounded-lg shadow-xl min-h-[50px] mt-10 ml-5 mr-5">
        <ul className="font-bold p-[15px] align-middle">
        <li className="text-center">DCIT 205</li>
        <li>Instructor: <span className="text-black">Mr.Michael Soli</span></li>
        <li>Email: <span className="text-black">michaela450@gmail.com </span> </li>
        <li>Tel: <span className="text-black">(+233) 241-638-173 </span> </li>
      </ul>

      <button onClick={() => window.location.href='mailto:michaela450@gmail.com'}  className="bg-blue-700 text-white font-semibold text-center rounded hover:bg-white hover:text-blue-700">
        Send Email</button>
        </div>

        </div>

        <div className="flex justify-between ">
          <div className="flex flex-col font-bold  bg-gray-300 text-blue-700  hover:bg-green-200 duration-75 cursor-pointer font-sans text-semibold rounded-lg shadow-xl min-h-[50px] ml-5 mt-20"> 

        <ul className="p-[15px]">
        <li className="text-center">DCIT 207</li>
        <li>Instructor: <span className="text-black">Mr.Amoah Danso</span></li>
        <li>Email: <span className="text-black">damoah81@gmail.com </span> </li>
        <li>Tel: <span className="text-black">(+233) 241-638-173 </span> </li>
      </ul>

      <button onClick={() => window.location.href='mailto:michaela450@gmail.com'}  className="bg-blue-700 text-white font-semibold text-center rounded hover:bg-white hover:text-blue-700">
        Send Email</button>

      </div>
       
      <div className=" flex flex-col font-bold  bg-gray-300 text-blue-700  hover:bg-green-200 duration-75 cursor-pointer font-sans text-semibold rounded-lg shadow-xl min-h-[50px] ml-5 mt-20">

      <ul className="p-[15px]" >
        <li className="text-center">DCIT 209</li>
        <li>Instructor: <span className="text-black">Mr.Bernard Gyansah</span></li>
        <li>Email: <span className="text-black">bernardgya11@gmail.com </span> </li>
        <li>Tel: <span className="text-black">(+233) 512-054-371 </span> </li>
      </ul>

      <button onClick={() => window.location.href='mailto:michaela450@gmail.com'}  className="bg-blue-700 text-white font-semibold text-center rounded hover:bg-white hover:text-blue-700">
        Send Email</button>

      </div>

      <div className=" flex flex-col font-bold  bg-gray-300 text-blue-700  hover:bg-green-200 duration-75 cursor-pointer font-sans text-semibold rounded-lg shadow-xl min-h-[50px] ml-5 mr-5 mt-20 ">

      <ul className="p-[15px]">
        <li className="text-center">CBAS 210</li>
        <li>Instructor: <span className="text-black">Mr.Prince Sakyi</span></li>
        <li>Email: <span className="text-black">sakyipri137@gmail.com </span> </li>
        <li>Tel: <span className="text-black">(+233) 243-816-003 </span> </li>
      </ul>

      <button onClick={() => window.location.href='mailto:michaela450@gmail.com'}  className="bg-blue-700 text-white font-semibold text-center rounded hover:bg-white hover:text-blue-700">
        Send Email</button>

      </div>

        </div>

       

        <Footer/>

        </>
    )
}
export default Contact;