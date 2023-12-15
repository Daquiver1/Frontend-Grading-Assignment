import {useState} from 'react';
import GradeSummary from './grades.js';
import books from '../images/books.jpg';
import Sidebar from '../components/Sidebar';
import FilterbySemester from './gradefilter.js';





const GradeReport = () => {
  const [/*open, setOpen*/] = useState(true);
const options = ['All Semesters', 'First Semester', 'Second Semester']

  return (
    <div className="flex">

      <Sidebar/>

      
         <div>
      {/*<div className=" flex-1 bg-cover bg-no-repeat  relative" style={{ backgroundImage: `url(${books})` }}>*/}
        <FilterbySemester/>
      {/*<div className="absolute inset-0 bg-black opacity-30"></div>*/}
        
       {/* <GradeSummary/>*/}
        
      </div>



    </div>
  )
    
}

export default GradeReport;
