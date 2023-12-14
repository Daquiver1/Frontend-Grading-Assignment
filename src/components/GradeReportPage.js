import React from 'react'
import { useNavigate } from 'react-router-dom';


const GradeReportPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/FormPage');
  };
  return (
    <>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div>

      <button onClick={handleClick} style={{background:'grey', color: 'whitesmoke', padding: '2px', borderRadius: '5px', width:'100px'}}>Submit</button>

      </div>
    </>
    
  )
}

export default GradeReportPage;