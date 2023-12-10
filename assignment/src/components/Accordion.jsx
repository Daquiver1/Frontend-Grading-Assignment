import { useState } from "react";
const Accordion = (props) => {
    const[items,setItem] = useState(props.datas);
    const handleToggleActive = () =>{
        let newActive = items.active === 1? 0:1;
        setItem({...items, active:newActive});
    }
    

    return (  
    
    <div  className={ `5 gap-x-4 gap-y-10 p-10 pt-10  grid-flow-row-dense group ${items.active===0? 'is-active':""}`}>
    
      <div onClick={handleToggleActive} className="  bg-blue-700 rounded-lg shadow-xl min-h-[40px] text-center py-2 font-bold text-white hover:bg-white hover:text-blue-700 cursor-pointer duration-100 group-[.is-active]:font-bold ">
      {items.course}
     
      <div className= "text-blue-700 bg-white hover:bg-green-200 cursor-auto overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] transition-all duration-500 ease-in" >
        {items.grade}
        
      </div>
      </div>
      
      
  
      </div> );
}
 
export default Accordion;