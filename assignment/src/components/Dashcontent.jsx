import { useState } from "react";
const Dash = () => {
   let courses =[
    {course:"DCIT201",grade:"Grade: A"},
    {course:"DCIT203",grade:"Grade: A"},
    {course:"DCIT205",grade:"Grade: A"},
    {course:"DCIT207",grade:"Grade: A"},
    {course:"DCIT209",grade:"Grade: A"},
    {course:"CBAS210",grade:"Grade: A"},
    
   ];

   
   
    return ( 
        
        <>
        <div className="pt-[85px]">
        <h1 className="text-3xl font-sans font-bold px-9 pb-2 "> Current Courses</h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 bg-gray-300 gap-x-4 gap-y-10 p-10 pt-10 ">
      {courses.map((courses) =>(
        <div className="bg-blue-700 rounded-lg shadow-xl min-h-[40px] text-center py-2 font-bold text-white hover:bg-white hover:text-blue-700 cursor-pointer duration-75 ">{courses.course}
       
        <div className= "text-blue-700 bg-white hover:bg-green-200 cursor-auto">{courses.grade}</div>
        </div>
        
        
       
      )
      )}
        </div>
        </div>
       
        </>
     );
}
 
export default Dash;