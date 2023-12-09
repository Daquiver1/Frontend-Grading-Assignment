import { useState } from "react";
import Accordion from "./Accordion";
const Dash = () => {
  const[list,setList] = useState([
    
        {course:"DCIT201",grade:"Grade: A"},
        {course:"DCIT203",grade:"Grade: N/A"},
        {course:"DCIT205",grade:"Grade: B+"},
        {course:"DCIT207",grade:"Grade: N/A"},
        {course:"DCIT209",grade:"Grade: A"},
        {course:"CBAS210",grade:"Grade: B+"},
    
  ])
    return ( 
        
        <>
        <div className="pt-[85px]">
        <h1 className="text-3xl font-sans font-bold px-9 pb-2 "> Current Courses and Grades</h1>
       <div className="grid grid-cols-1 sm:grid-cols-3">
        {list.map((item,key)=>
        (<Accordion key={key} datas={item}/>)
        )}
       </div>
        </div>
        <div >
          <p className="font-sans text-red-600">Updates:</p>
          <p>Total Courses: Six(6) <br />
             Available Grades: Four(4)
          </p>
          <p>Missing Grade(s): Two(2)</p>
        </div>
        <div>
          Alert!!!
          <p>You have two missing grades this semester.</p>
        </div>
       
        </>
     );
}
 
export default Dash;