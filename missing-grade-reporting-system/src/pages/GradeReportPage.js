import {useState} from 'react';
import GradeSummary from './grades.js';
import books from '../images/books.jpg';
import Sidebar from '../components/Sidebar';




const GradeReport = () => {
  const [/*open, setOpen*/] = useState(true);

  return (
    <div className="flex">

      <Sidebar/>

      

      

      <div className=" flex-1 bg-cover bg-no-repeat  relative" style={{ backgroundImage: `url(${books})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
        <GradeSummary/>
        
      </div>



    </div>
  )
    
}

export default GradeReport;