import React, { useState, useEffect } from 'react';
import './missingGradeForm.css'
import MissingFormNavBar from './missingFormNavBar.jsx';
import UserInfo from '../User-Info/userInfo'; 
import { useForm, Controller } from 'react-hook-form';
import Footer from '../Footer/footer';


const MissingGradeForm = () => {

  const { register, control, handleSubmit, watch, formState: { errors } } = useForm();
  const examStatus = watch('examStatus');

  const [userData, setUserData] = useState({
    studentName: 'Bismark Obuobi',
    programOffering: 'BSc Information Technology',
    level: '200',
    studentId: '11146250',
    missingGradesCount: 3,
  });

  const onSubmit = (data) => {
    // Handle form submission logic (e.g., send data to the server)
    console.log(data);
  };

  useEffect(() => {
    document.title = 'Missing Grade Form';
  }, []);


  return (
    <div>
      <MissingFormNavBar />
      <UserInfo
        studentName={userData.studentName}
        programOffering={userData.programOffering}
        studentId={userData.studentId}
        level={userData.level}
        missingGradesCount={userData.missingGradesCount}
      />
    <section id='form-section-container'>
      <div className='form-container'>
        <h2>Report Missing Grade Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div> 
          <label>Course Code:</label>
          <Controller 
          name='courseCode'
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
          />
        {errors.courseName && <p className="error-message">{errors.courseName.message}</p>}
        </div> 

        <div>
            <label>Course Name:</label>
            <Controller
              name="courseName"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} />}
            />
            {errors.courseName && <p className="error-message">{errors.courseName.message}</p>}
          </div>

          <div>
          <label>Exam Status:</label>
          <select {...register('examStatus', { required: true })}>
            <option value=''>   </option>
            <option value='wrote'>Wrote Exams</option>
            <option value='didNotWrite'>Did Not Write Exams</option>
          </select>
          </div>

          <div>
          {examStatus === 'wrote' && (
            <div>
              <label>Resit?</label>
              <select {...register('resitStatus', { required: true })}>
                <option value=''>    </option>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
          </div>
          )}
          </div>

          <div>
            <label>Report Message:</label>
            <Controller
              name="reportMessage"
              control={control}
              defaultValue=""
              render={({ field }) => <textarea {...field} />}
            />
            {errors.reportMessage && <p className="error-message">{errors.reportMessage.message}</p>}
          </div>

          <button type="submit">Submit</button> 
        </form>

      </div>
    </section>  
      
     <Footer /> 
    </div>
  )
}

export default MissingGradeForm