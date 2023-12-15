import Footer from "./Footer";
import { Link } from "react-router-dom";





const Help = () => {

    return ( 
        <>
   <div className="pl-5  leading-6">
         <h1 className=" font-sans text-2xl text-center font-bold pb-2 text-blue-700">Help and Support</h1>
           <p className="pb-2 font-sans text-[18px]">If you are experiencing issues with Missing Grade Report System, we are here to assist you.Please find helpful information , FAQs and a support form below:</p> 
           <h2 className="font-bold font-sans text-lg text-blue-800">FAQs</h2>
           <ol>
            <li className="font-semibold text-blue-500">How long does it take for a missing grade to be resolved in the system?</li>
            <p className="pb-4 font-sans text-[18px]">Resolution times may vary based on the nature of the issue.Our support team aims to address reported missing grades promptly, and you will receive updates as the investigation progresses.</p>

               <li className="font-semibold text-blue-500">What information should I provide when reporting a missing grade?</li>
               <p className="pb-4 font-sans text-[18px]">To expedite the process, please include your full name, student ID, the specific course name and course code, and a detailed description of the missing grade issue when <span className="font-semibold text-blue-700 hover:text-yellow-500"><Link to="/missing grade">submitting a form.</Link></span></p>

               <li className="font-semibold text-blue-500">Can I report missing grades for multiple courses in a single request?</li>
               <p className="pb-4 font-sans text-[18px] ">Yes,you can report missing grades for multiple courses in one request.Ensure that you provide accurate information for each course,making it easier for our support team to investigate and resolve the issue efficiently.</p>
               <li className="font-semibold text-blue-500">Is there specific time frame within which I should report a missing grade?</li>
               <p className="pb-4 font-sans text-[18px]">It is recommended to report missing grades as soon as you notice the discrepancy.Timely reporting allows our team to address the issue promptly and work toward a resolution before the end of the grading period.</p>

               <li className="font-semibold text-blue-500">What if I am unable to resolve the missing grade issue through the system?</li>
               <p className="pb-4 font-sans text-[18px]">If you have followed the reporting process and the issue persists, visit the <span className="font-semibold text-blue-700 hover:text-yellow-500"> <Link to="/instructor contact">Contacts</Link></span> page to directly contact the instructor of the course.</p>

           </ol>
          </div>

          
          <div className="flex flex-col items-center py-5  h-fit  bg-gradient-to-b from-green-200 to to-purple-400">
        <h1 className="font-bold text-3xl text-blue-700 mb-10">Support Form</h1>
        <form>

            <label className="flex flex-col  text-xl font-sans font-semibold  " htmlFor="text"> First Name</label>
            <input className= "rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px] mb-10" type="text"    placeholder="First Name" id="name" name="name" required/>

            <label className="flex flex-col  text-xl font-sans font-semibold  " htmlFor="text">Last Name</label>
            <input className= "rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px] mb-10" type="text"    placeholder="Last Name" id="name" name="name" required/>

            <label className="flex flex-col  text-xl font-sans font-semibold  " htmlFor="text">Course Name</label>
            <input className= "rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px] mb-10" type="text"    placeholder="Course Name" id="course" name="course" required/>

            <label className="flex flex-col font-sans font-semibold text-xl" htmlFor="password">Course Code</label>
            <input className="rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px]" type="string"  placeholder="Course Code" id="course" name="course" required/>

            <label className=" mt-10 flex flex-col  text-xl font-sans font-semibold  " htmlFor="text">Issue Description</label>
            <input className= "rounded bg-slate-200 font-extralight font-serif text-center h-[45px] w-[400px] mb-8 " type="text"    placeholder="Problem Description" id="problem" name="problem" required/>

            <button onClick={()=>(
               alert('Form submitted')
            )}  type="submit" className="flex flex-col text-center  pl-10 w-[120px] bg-blue-700 text-white font-semibold rounded p-[8px] hover:bg-yellow-300 hover:text-blue-700 duration-75 mt-10 mb-0">Submit</button>


        </form>
       </div>
       <Footer/>
     

      
  
        
        </>
     );
}
 
export default Help;