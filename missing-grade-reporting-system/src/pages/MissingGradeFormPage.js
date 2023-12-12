import GradeReportPage from './gradereportform.js';
import missingbg from '../images/missingbg.jpg';
import Sidebar from '../components/Sidebar';



const MissingGradeForm = () => {

  return (
    <div className="flex">

      <Sidebar/>

      

      

      <div className="flex-1 p-7 bg-cover bg-no-repeat  relative" style={{ backgroundImage: `url(${missingbg})` }}>
        <GradeReportPage/>
      </div>



    </div>
  )
    
}

export default MissingGradeForm;