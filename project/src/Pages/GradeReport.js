import React, {useState} from 'react'
import SideBar from './SideBar';
import Home from './Home';
import DashNav from './DashNav';
import YearFilter from './yearFilter';
import './GradeReport.css';






const GradeReport = () => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  
    const handleYearChange = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    return(
        <>
        <div className='container-fluid bg-secondary min-vh-100 sidebarContainer'>
                <div className='row'>
                    <div className='col-2 bg-white vh-100'>
         <SideBar />
         </div>
         <div className='col-10'>
       <div className='px-3 overview'>
       <DashNav />

                </div>

        <div> 
            <h1 className='heading'>Student Academic Results</h1>
            <YearFilter onChange={handleYearChange} />
      {/* This is where i will write codes to feccth the results of the selected year */}
      
            
        </div>
        </div>
        </div>
        </div>
        </>
    )
}


export default GradeReport;