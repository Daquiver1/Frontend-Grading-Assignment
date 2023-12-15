import { useState } from "react";
import Accordion from "./Accordion";
import Footer from "./Footer";
import { Link } from "react-router-dom";
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
          <p className=" text-xl font-semibold font-sans text-blue-700 px-9 pt-8">UPDATES:</p>
          <div/>
          <div className="font-sans text-xl px-9 leading-8">
          <p> <span className="font-bold">Total Courses:</span> Six ({list.length}) <br />
          <span className="font-bold">Available Grades:</span> Four(4)
          </p>
          <p><span className="font-bold">Missing Grade(s):</span> Two(2)</p>
          </div>
          </div>
        <div className="font-sans px-9 pt-5 text-xl">
          <span className="text-red-600  font-semibold text-xl ">ALERT!!!</span>
          <p className="pb-20">You have two missing grades this semester but worry not,MGRS is here for you.You can report missing grades by filling the form on the <Link to="/missing grade" className="text-blue-700 hover:text-yellow-500 duration-75">Missing Grade Form</Link> to have the missing grade provided in the fastest possible time. </p>
        </div>
       <Footer/>
        </>
     );
}
 
export default Dash;