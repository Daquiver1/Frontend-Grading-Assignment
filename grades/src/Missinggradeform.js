import './Missinggrade.css';
import {useState} from 'react'
const Missinggrade = () => {
    const [formData, setFormData]=useState({
        courseName:"",
        instructorName:"",
        expectedGrade:"",
        explanation:"",
    } )

    const [isSubmitted,setIsSubmitted]= useState(false);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData((prevData)=> ({prevData,[name]:value,}))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        setIsSubmitted(true)
        window.alert("Submission successful. Your lecturer will get back to you")
    }  
    const handleGoBack = () => {
        setFormData({
            courseName:"",
        instructorName:"",
        expectedGrade:"",
        explanation:"",
        })
        setIsSubmitted(false)
    }  
    return (  
        <div>
            <h1>Missing Grade Form Report</h1>
            {!isSubmitted?(
                <form onSubmit={handleSubmit}>
                    <label className='CourseName'>
                        Course Name:
                    </label>
                    <input 
                    type="text"
                    id="courseName"
                    name='courseName'
                    value={formData.courseName}
                    onChange={handleChange}
                    required/>
                    <br/>
                   

          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
            required
          /><br />

          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleChange}
            required
          /><br />

          <label htmlFor="explanation">Explanation:</label>
          <textarea
            id="explanation"
            name="explanation"
            rows="4"
            value={formData.explanation}
            onChange={handleChange}
            required
          ></textarea><br />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Thank you for submitting the missing grade report!</p>
          <p>
            If you need to submit another report, you can{' '}
            <button onClick={handleGoBack}>Go Back to Form</button>.
          </p>
          
        </div>
      )}
    </div>
  );
};

 
export default Missinggrade;